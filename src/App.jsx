import { useState } from "react"
import Card from "./components/Card"
import Form from "./components/Form";
import appStyles from './styles/app.module.css'

const inputValidation = /^[^\s].{2,}$/;

function App() {
  
  const [data, setData] = useState({
    fruta: "",
    animal: "",
    lugar: ""
  })

  const [showCard, setshowCard] = useState(false);
  const [validData, setValidData] = useState(true);


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const clearData = () => {
    setData({
      fruta: "",
      animal: "",
      lugar: ""
    })
    setshowCard(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValidation.test(data.fruta) || data.lugar.length < 6) {
      setValidData(false);
      setshowCard(false);
    }
    else{
      setValidData(true);
      setshowCard(true);
    }
    
  }
  
  return (
  <div className="App">
    <div className="App-container" >
      <h1 className={appStyles.title} >Historia loca</h1>
      <Form data={data} handleChange={handleChange} handleSubmit={handleSubmit} validData={validData} />
      { showCard && <Card data={data} clearData={clearData} /> }
    </div>
  </div>

  )
}

export default App
