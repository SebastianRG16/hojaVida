import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Information } from "./pages/informationPersonal/Infomration";
import { Aboutme } from "./pages/aboutMe/Aboutme";
import { Experience } from "./pages/experience/Experience";
import { Servicies } from "./pages/services/Seriveces";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          **<Route index element={<Information />}></Route>
          <Route path="/aboutMe" element={<Aboutme />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/services" element={<Servicies />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
