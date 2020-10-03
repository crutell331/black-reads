
function logoutUser() {
    return { type: "LOGOUT" }
}

function getAuthors() {
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/authors")
            .then(resp => resp.json())
            .then(({ data }) => {
                let authors = data.map((ele) => {
                    return ele.attributes
                })
                dispatch({ type: "GET AUTHORS", payload: authors })
            })
            .catch(console.log)
    }
}
function getCategories() {
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/categories")
            .then(resp => resp.json())
            .then(({ data }) => {
                let categories = data.map((ele) => {
                    return ele.attributes
                })
                dispatch({ type: "GET CATEGORIES", payload: categories })
            })
            .catch(console.log)
    }
}
function getBooks() {
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/books")
            .then(resp => resp.json())
            .then(({ data }) => {
                const books = data.map(el => el.attributes)
                dispatch({ type: "GET BOOKS", payload: books })
            })
            .catch(console.log)
    }
}
function signupUser(userInfo) {
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ user: userInfo })
        })
            .then(resp => resp.json())
            .then(({ data }) => {
                let { attributes } = data
                localStorage.setItem("token", attributes.encoded_id)
                dispatch({ type: "ADD USER", payload: { username: attributes.username } })
            })
            .catch(console.log)
    }
}
function loginUser(userInfo) {
    debugger
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ user: userInfo })
        })
            .then(resp => resp.json())
            .then(({ data }) => {
                let { attributes } = data
                localStorage.setItem("token", attributes.encoded_id)
                dispatch({ type: "ADD USER", payload: { username: attributes.username } })
            })
            .catch(console.log)
    }
}
function passiveLoginUser(token) {
    return function (dispatch) {
        fetch("http://localhost:4000/api/v1/user_info", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                accepts: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(({ data }) => {
                let { attributes } = data
                localStorage.setItem("token", attributes.encoded_id)
                dispatch({ type: "ADD USER", payload: { username: attributes.username } })
            })
            .catch(console.log)
    }
}


export { loginUser, logoutUser, passiveLoginUser, signupUser, getBooks, getCategories, getAuthors }