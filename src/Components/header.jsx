import { Link } from "react-router-dom";

const Header = () => {
    return(
       <>
            <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/listaenvios" className="logo d-flex align-items-center">
                    <img src="assets/img/LogoEnvio.png" alt=""/>
                    <span className="d-none d-lg-block">InstaYa</span>
                </Link>
            </div>{/*<!-- End Logo -->*/}

            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

                
                
                <li className="nav-item dropdown pe-3">

                <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                    <img src="assets/img/LogoEnvio.png" alt="Profile" className="rounded-circle"/>
                    <span className="d-none d-md-block dropdown-toggle ps-2">Usuario Desconocido</span>
                </Link>{/*<!-- End Profile Iamge Icon -->*/}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                    <h6>Usuario desconocido</h6>
                    <span>Activo</span>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/usuario1">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </Link>
                    </li>

                </ul>{/*<!-- End Profile Dropdown Items -->*/}
                </li>{/*<!-- End Profile Nav -->*/}

            </ul>
            </nav>{/*<!-- End Icons Navigation -->*/}

            </header>
        </>
    )
}

export default Header