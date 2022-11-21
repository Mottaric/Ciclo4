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

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/logo.png" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">Usuario's Name</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Usuario's Name</h6>
              <span>Activo</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul>
        </li>

      </ul>
    </nav>

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

  <main id="main" className="main">
    <section className="section dashboard">
      <div className="col-lg-9">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Lista de envíos</h5>

            {/*<!-- Table with stripped rows -->*/}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Destino</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Estado</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">00001</th>
                  <td>Barranquilla</td>
                  <td>2016-05-25</td>
                  <td>Guardado</td>
                </tr>
                <tr>
                  <th scope="row">00002</th>
                  <td>San Antonio de Prado</td>
                  <td>2016-05-25</td>
                  <td>Completado</td>
                </tr>
                <tr>
                  <th scope="row">00003</th>
                  <td>Chía</td>
                  <td>2016-05-25</td>
                  <td>Cancelado</td>
                </tr>
                
              </tbody>
            </table>
            {/*<!-- End Table with stripped rows -->*/}

          </div>
        </div>
      </div>
    </section>

  </main>{/*<!-- End #main -->*/}

       </> 
    )
}

export default ListaEnvios;
