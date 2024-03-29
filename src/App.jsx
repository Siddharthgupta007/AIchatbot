import Home from "./components/Home";
import Login from "./components/Login";
import "./index.css"
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
