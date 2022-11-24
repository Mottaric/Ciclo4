import { Link } from "react-router-dom";
import { BarraLateral } from "./sidebar";
import { FormNuevoEnvio } from "./formNuevoEnvio";

const ListaEnvios = () => {
    return(
       <>
          <BarraLateral />
          <FormNuevoEnvio />
        </> 
    )
}

export default ListaEnvios;
