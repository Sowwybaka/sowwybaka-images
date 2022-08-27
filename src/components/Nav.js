import React from 'react'

function Nav(props) {


    return (
        <><nav className={`navbar navbar-expand-lg bg-${props.theme} navbar-${props.theme}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Sowwybaka Images
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.changeTheme}
                        />
                        <label className={`text-${(props.theme == "dark") ? "light" : "dark"} form-check-label" htmlFor="flexSwitchCheckDefault`}>
                            Change Theme                        </label>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav