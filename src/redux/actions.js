

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


export { loginUser, passiveLoginUser, signupUser }