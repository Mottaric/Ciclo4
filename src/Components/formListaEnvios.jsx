export function FormListaEnvios(){
    return (
        
    <main id="main" className="main">
  <section className="section dashboard">
    <div className="col-lg-11">

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

    </main>


    );
}
//export default Prueba;