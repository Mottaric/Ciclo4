import { Link } from "react-router-dom";
import { BarraLateral } from "./sidebar";
import { FormListaEnvios } from "./formListaEnvios"

const ListaEnvios = () => {
    return(
       <>
          <BarraLateral />
          <FormListaEnvios />
  
       </> 
    )
}

export default ListaEnvios;
