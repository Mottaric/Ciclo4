import { useState } from "react"

const Login =({validateLogin,setvalidateLogin})=>{
    const [isLogin,setIsLogin]= useState(true);
    const handleSubmit =(event)=>{
        event.preventDefault()
        if(isLogin){
            //TODO inicio de sesión
            alert("Se inicia sesion")

            //setvalidateLogin(true)
        }else{
            //TODO registro  de usuario
            
            //setvalidateLogin(true)
        }
    }

    return <div style={{display: validateLogin ? 'none':'' }}>
      
       <form onSubmit={handleSubmit} >
            {
                isLogin ? 
                <div   className="formulario">
                <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Message</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    
                </div>
                </div>
            </div>
            </nav>
                <br></br>

                <h2>Login</h2>
                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <div className="mb-3 form-check">
            </div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
                <p/><button onClick={()=>setIsLogin(!isLogin)} href="#">Register</button>
            </div> 
            :
            <div  className="formulario">
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Create password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Recuperacion</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
                <p/><button style={{position:"absolute", top: "10%", left:"20%"}}  onClick={()=>setIsLogin(!isLogin)} href="#">Regresar</button>
                
                <input type="submit" value="Registrar"/>
            </div>
            
            }
        </form> 

        <form>
  
</form>


    </div>
}


export default Login


