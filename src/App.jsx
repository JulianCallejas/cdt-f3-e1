import { useState } from "react"
import Card from "./components/Card"

import appStyles from './styles/app.module.css'


function App() {
  

  const [data, setData] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  
  return (
  <div className="App">
    <div className="App-container" >
      <h1 className={appStyles.title} >Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}  className="form" >
      <div className="input-container">
        <input id="email" name="email" className="input" type="email" placeholder=" " value={data.email} onChange={handleChange} />
        <div className="cut"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      
      <div className="input-container">
        <input id="password" name="password" className="input" type="password" placeholder=" " value={data.password} onChange={handleChange} />
        <div className="cut"></div>
        <label htmlFor="email" className="placeholder">Password</label>
      </div>
      <div className="input-container">
        <button className="btn fill" type="submit" >BUY NOW</button>
      </div>
      </form>
      <Card prueba={"Hola, soy una tarjeta"} />
    </div>
  </div>

  )
}

export default App
