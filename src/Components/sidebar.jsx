import { Link } from "react-router-dom";

export function BarraLateral(){
    return (
        
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

          </aside>

    )
}