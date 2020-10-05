import React from 'react'

class NavItem extends React.Component {

    render() {
        return (
            <div className="navbar-user-items" onClick={this.showAuthorDisplay} >
                <p>{props.type}</p>
                <div className="navbar-user-dropdown" style={{ display: this.state.authorDisplay }}>
                    <div className="user-dropdown-content">
                        {this.sortAndRenderAuthors()}
                        <div>
                            <NavLink to="/authors" onClick={this.logoutUser} className="dropdown-item">More...</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NavItem