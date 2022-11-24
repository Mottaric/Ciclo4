export function FormNuevoEnvio(){
    return (
        <>
            <div className="col-sm-9">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Formulario para nuevo envío</h5>
                                <p>Datos de la encomienda</p>
                                <form>
                                    
                                <div className="row mb-3">
                                    <label for="inputDate" className="col-sm-5 col-form-label">Fecha de Recolección:</label>
                                    <div className="col-sm-7">
                                    <input type="date" className="form-control" />
                                </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Direccion de recolección:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Ciudad:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-3">
                                        <label className="form-label">Peso Aprox:</label>
                                        <input type="text" className="form-control" id=""  />
                                    </div>
                                    <div className="col-md-2">
                                        <label className="form-label">Largo (cm):</label>
                                        <input type="text" className="form-control" id=""  />
                                    </div>
                                    <div className="col-md-2">
                                        <label  className="form-label">Ancho (cm):</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="col-md-2">
                                    <label  className="form-label">Largo (cm):</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="" aria-describedby="inputGroupPrepend2" />
                                        </div>
                                    </div>
                                    <div className="form-check col-md-2">
                                    <div className="form-check">
                                        <label className="form-check-label" for="gridCheck1">
                                        ¿Es delicado?
                                        </label>
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    </div>
                                </div>
                                </div>
                                
                                <p><span>Datos del destinatario</span></p>

                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Nombre:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Documento:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Dirección:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Ciudad:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <label for="inputText" className="col-sm-5 col-form-label">Teléfono:</label>
                                    <div className="col-sm-7">
                                    <input type="text" className="form-control" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Crear servicio</button>
                                    </div>
                                </div>

                                </form>

                            </div>
                        </div>
            </div>
        </>
        )
}