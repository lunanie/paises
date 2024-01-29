import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import {
  Africa,
  America, Asia, Europe, Oceania, Polar
} from "./pages/Continents";
import Home from "./pages/Home";
import {
  Al,
  Asean,
  Au,
  Cais,
  Caricom,
  Cefta,
  Eeu,
  Efta,
  Eu,
  Nafta,
  Pa,
  Saarc,
  Usan
} from './pages/Continents/RegionalBlocs'

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index element={<Home />} />
          <Route path="africa" element={<Africa />} />
          <Route path="america" element={<America />} />
          <Route path="asia" element={<Asia />} />
          <Route path="europe" element={<Europe />} />
          <Route path="oceania" element={<Oceania />} />
          <Route path="polar" element={<Polar />} />

          <Route path="regionalblocs" element={<Outlet />}>
            <Route path="al" element={<Al />} />
            <Route path="asean" element={<Asean />} />
            <Route path="au" element={<Au />} />
            <Route path="cais" element={<Cais />} />
            <Route path="caricom" element={<Caricom />} />
            <Route path="cefta" element={<Cefta />} />
            <Route path="eeu" element={<Eeu />} />
            <Route path="efta" element={<Efta />} />
            <Route path="eu" element={<Eu />} />
            <Route path="nafta" element={<Nafta />} />
            <Route path="pa" element={<Pa />} />
            <Route path="saarc" element={<Saarc />} />
            <Route path="usan" element={<Usan />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
