import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { AuthLayout } from "./components/Layout/AuthLayout"
import { Login } from "./components/Pages/Login"
//BrowserRouter es como el abuelo de las rutas, el routes es el hijo, y el
//Route es el nieto
//En react los componentes se manejan como si fueran etiquetas HTML 
//Ejemplo <nombre_componente> </nombre_componente>

function App() {
  return (
    <>
     <Router>
      <Routes>
       <Route path="/" element={<AuthLayout/>}> 
       //Aqui van las rutas hijas
       <Route index element={<Login/>}></Route>
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App