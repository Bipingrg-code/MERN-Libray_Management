import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bg">
                <div className="container">
                    <Link className="nav-item nav-link active text-white" aria-current="page" to="/">
                       <h1>Hamro Kitab Pasal</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link active text-white" aria-current="page" to="/">
                                Home
                            </Link>
                            <Link className="nav-item nav-link active text-white" aria-current="page" to="/books">
                                Books
                            </Link>
                            <Link className="nav-item nav-link active text-white" aria-current="page" to="/addbooks">
                                Add Books
                            </Link>
                        </ul>

                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar