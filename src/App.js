import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home/Home.js";
import  Navbar  from "./Pages/Navbar/navbar.js";
import { Poverty_Alleviation } from "./Pages/Poverty Alleviation/Poverty_Alleviation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/education" element={<Home />} />
          <Route
            exact
            path="/poverty_alleviation"
            element={<Poverty_Alleviation />}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
