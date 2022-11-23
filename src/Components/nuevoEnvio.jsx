import { Link } from "react-router-dom";

const ListaEnvios = () => {
    return(
       <>
       {/*<!-- ======= Header ======= -->*/}
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <Link to="/listaenvios" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span className="d-none d-lg-block">Gestor de Recoleccion</span>
      </Link>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>{/*<!-- End Logo -->*/}

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        
        
        <li className="nav-item dropdown pe-3">

          <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
            <img src="assets/img/logo.png" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">Usuario's Name</span>
          </Link>{/*<!-- End Profile Iamge Icon -->*/}

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Usuario's Name</h6>
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

  </header>{/*<!-- End Header -->*/}

  {/*<!-- ======= Sidebar ======= -->*/}
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        
          <i className="bi bi-grid"></i>
          <span>Panel de usuario</span>
        
      </li>
      
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/nuevoenvio">
          <i className="bi bi-dash-circle"></i>
          <span>Nuevo envío</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/listaenvios">
          <i className="bi bi-file-earmark"></i>
          <span>Lista de envíos</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/registro">
          <i className="bi bi-card-list"></i>
          <span>Registro</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/login">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </Link>
      </li>

    </ul>

  </aside>{/*<!-- End Sidebar-->*/}

       </> 
    )
}

export default ListaEnvios;
