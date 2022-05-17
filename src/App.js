import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Education } from "./Pages/Education/Education";
import { Poverty_Alleviation } from "./Pages/Poverty Alleviation/Poverty_Alleviation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/education" element={<Education />} />
          <Route
            exact
            path="/poverty_alleviation"
            element={<Poverty_Alleviation />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
