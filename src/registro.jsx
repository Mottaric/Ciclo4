const Registro = () => {
    return(

        <div className="container">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto">
                   <span className="d-lg-block">GESTIÓN DE RECOLECCIÓN DE ENVÍOS</span>
                </a>
                </div>{/*<!-- End Logo -->*/}

                <div className="card mb-3">

                <div className="card-body">

                    <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Formulario de registro</h5>
                    {/*<!--<p className="text-center small">Ingresa tus datos personales</p>-->*/}
                    </div>

                    <form className="row g-3 needs-validation" noValidate>
                    <div className="col-12">
                        <label for="yourName" className="form-label">Nombre</label>
                        <input type="text" name="name" className="form-control" id="yourName" required/>
                        <div className="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div className="col-12">
                        <label for="yourId" className="form-label">Documento de identidad</label>
                        <input type="text" name="docId" className="form-control" id="yourId" required/>
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div className="col-12">
                        <label for="yourPassword" className="form-label">Contraseña</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" required/>
                        <div className="invalid-feedback">Please enter your password!</div>
                    </div>
                    
                    <div className="col-12">
                        <label for="yourEmail" className="form-label">Email</label>
                        <div className="input-group has-validation">
                        <input type="email" name="email" className="form-control" id="yourEmail" required/>
                        <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="yourPhone" className="form-label">Teléfono</label>
                        <input type="text" name="telefono" className="form-control" id="yourPhone" required/>
                        <div className="invalid-feedback">Please, enter your phone!</div>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label className="form-check-label" for="acceptTerms">Acepto los <a href="#">términos y condiciones</a></label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Registro</button>
                    </div>
                    <div className="col-12">
                        <p className="small mb-0">¿Ya tienes cuenta?</p> 
                        <p> <a href="/login">Ingresa aquí</a></p>
                    </div>
                    </form>

                </div>
                </div>

                <div className="credits">
                {/*<!-- All the links in the footer should remain intact. -->*/}
                {/*<!-- You can delete the links only if you purchased the pro version. -->*/}
                {/*<!-- Licensing information: https://bootstrapmade.com/license/ -->*/}
                {/*<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->*/}
                {/*Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>*/}
                </div>

            </div>
            </div>
        </div>

        </section>

        </div>
    )
}

export default Registro;