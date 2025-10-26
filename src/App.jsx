import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Comp/Contact";
import Experience from "./Comp/Experience";
import Skils from "./Comp/Skils";
import Extra from "./Comp/Extra";
import Education from "./Comp/Education";

export default function App() {
  return (
<div>


     <BrowserRouter basename="/portfolio">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Skils" element={<Skils/>}/>
        <Route path="/Extracurricular" element={<Extra/>}/>
        <Route path="/Education" element={<Education/>}/>
      </Routes>
    </BrowserRouter>
</div>
  );
}
