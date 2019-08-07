import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/pages/Africa" component={Africa} />
      <Route path="/pages/America" component={America} />
      <Route path="/pages/Asia" component={Asia} />
      <Route path="/pages/Europe" component={Europe} />
      <Route path="/pages/Oceania" component={Oceania} />
      <Route path="/pages/Polar" component={Polar} />
      <Route path="/pages/RegionalBlocs/Al" component={Al} />
      <Route path="/pages/RegionalBlocs/Asean" component={Asean} />
      <Route path="/pages/RegionalBlocs/Au" component={Au} />
      <Route path="/pages/RegionalBlocs/Cais" component={Cais} />
      <Route path="/pages/RegionalBlocs/Caricom" component={Caricom} />
      <Route path="/pages/RegionalBlocs/Cefta" component={Cefta} />
      <Route path="/pages/RegionalBlocs/Eeu" component={Eeu} />
      <Route path="/pages/RegionalBlocs/Efta" component={Efta} />
      <Route path="/pages/RegionalBlocs/Eu" component={Eu} />
      <Route path="/pages/RegionalBlocs/Nafta" component={Nafta} />
      <Route path="/pages/RegionalBlocs/Pa" component={Pa} />
      <Route path="/pages/RegionalBlocs/Saarc" component={Saarc} />
      <Route path="/pages/RegionalBlocs/Usan" component={Usan} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
