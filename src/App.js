import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Africa from "./pages/Africa/Africa";
import America from "./pages/America/America";
import Asia from "./pages/Asia/Asia";
import Europe from "./pages/Europe/Europe";
import Oceania from "./pages/Oceania/Oceania";
import Polar from "./pages/Polar/Polar";
import Caricom from "./pages/RegionalBlocs/Caricom";
import Al from "./pages/RegionalBlocs/Al";
import Asean from "./pages/RegionalBlocs/Asean";
import Au from "./pages/RegionalBlocs/Au";
import Cais from "./pages/RegionalBlocs/Cais";
import Cefta from "./pages/RegionalBlocs/Cefta";
import Eeu from "./pages/RegionalBlocs/Eeu";
import Efta from "./pages/RegionalBlocs/Efta";
import Eu from "./pages/RegionalBlocs/Eu";
import Nafta from "./pages/RegionalBlocs/Nafta";
import Pa from "./pages/RegionalBlocs/Pa";
import Saarc from "./pages/RegionalBlocs/Saarc";
import Usan from "./pages/RegionalBlocs/Usan";
import Home from "./pages/Home/Home";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="pages" element={<Home />}>
            <Route path="Africa" component={Africa} />
            <Route path="America" component={America} />
            <Route path="Asia" component={Asia} />
            <Route path="Europe" component={Europe} />
            <Route path="Oceania" component={Oceania} />
            <Route path="Polar" component={Polar} />
            <Route path="Al" component={Al} />
            <Route path="Asean" component={Asean} />
            <Route path="Au" component={Au} />
            <Route path="Cais" component={Cais} />
            <Route path="Caricom" component={Caricom} />
            <Route path="Cefta" component={Cefta} />
            <Route path="Eeu" component={Eeu} />
            <Route path="Efta" component={Efta} />
            <Route path="Eu" component={Eu} />
            <Route path="Nafta" component={Nafta} />
            <Route path="Pa" component={Pa} />
            <Route path="Saarc" component={Saarc} />
            <Route path="Usan" component={Usan} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
