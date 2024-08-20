import logo from './logo.svg';
import './App.css';
import DashBoard from './component/DashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Clothes from './component/clothes/Clothes';
import Cosmetic from './component/cosmeticproduct/Cosmetic';
import Electronics from './component/electronics/Electronics';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
               <Route path="/Clothes" element={<Clothes />} />
               <Route path="/Home" element={<Home />} />
               <Route path="/Cosmetic" element={<Cosmetic />} />
               <Route path="/Electronics" element={<Electronics />} />
               <Route path="*" element={<DashBoard />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
