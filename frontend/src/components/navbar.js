import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
    const cardata = localStorage.getItem("itemscart")
    console.log("cardata", cardata)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/jpeg;base64,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" width="75" height="75" style={{borderRadius: "100px"}} className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                        </ul>

                        {!localStorage.getItem('user') ? (
                            <form className='d-flex ml-auto'>
                                <Link className='btn btn-dark mx-2' to="/signup" role="button">Signup</Link>
                                <Link className='btn btn-dark mx-2' to="/login" role="button">Login</Link>
                            </form>
                        ) : (
                            <div className="d-flex align-items-center ml-auto">
                                <h4 className="mb-0 mx-2">{JSON.parse(localStorage.getItem('user')).username}</h4>
                                <button onClick={handleLogout} className='btn btn-dark'>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
