import React from "react";
import { Link } from "react-router-dom";

export default function RegionalBlocs(props) {
  return (
    <div className="container">
      <h2>Blocos Regionais</h2>
      <div className="regionalBloc">
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Al">AL (Arab League)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Asean">
              ASEAN (Association of Southeast Asian Nations)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Au">AU (African Union)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Cais">
              CAIS (Central American Integration System)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Caricom">
              CARICOM (Caribbean Community)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Cefta">
              CEFTA (Central European Free Trade Agreement)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Eeu">
              EEU (Eurasian Economic Union)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Efta">
              EFTA (European Free Trade Association)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Eu">EU (European Union)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Nafta">
              NAFTA (North American Free Trade Agreement)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Pa">PA (Pacific Alliance)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Saarc">
              SAARC (South Asian Association for Regional Cooperation)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="/pages/RegionalBlocs/Usan">
              USAN (Union of South American Nations)
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
