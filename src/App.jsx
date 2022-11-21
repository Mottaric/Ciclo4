import { useState } from 'react'
import Login from './Components/Login'
import './App.css'
const  App=()=> {
  const [validateLogin, setvalidateLogin] = useState(false)

  return (
    <div className="App">
      <Login validateLogin = {validateLogin} setvalidateLogin ={setvalidateLogin}/>
      
    </div>
  )
}

export default App
