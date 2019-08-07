// EU (European Union)
// EFTA (European Free Trade Association)
// CARICOM (Caribbean Community)
// PA (Pacific Alliance)
// AU (African Union)
// USAN (Union of South American Nations)
// EEU (Eurasian Economic Union)
// AL (Arab League)
// ASEAN (Association of Southeast Asian Nations)
// CAIS (Central American Integration System)
// CEFTA (Central European Free Trade Agreement)
// NAFTA (North American Free Trade Agreement)
// SAARC (South Asian Association for Regional Cooperation)

import React from "react";
import { Link } from "react-router-dom";

export default function RegionalBlocs(props) {
  return (
    <div className="container">
      <h2>Blocos Regionais</h2>
      <div className="regionalBloc">
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Al">AL (Arab League)</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Asean">
                ASEAN (Association of Southeast Asian Nations)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Au">AU (African Union)</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Cais">
                CAIS (Central American Integration System)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Caricom">
                CARICOM (Caribbean Community)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Cefta">
                CEFTA (Central European Free Trade Agreement)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Eeu">
                EEU (Eurasian Economic Union)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Efta">
                EFTA (European Free Trade Association)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Eu">EU (European Union)</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Nafta">
                NAFTA (North American Free Trade Agreement)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Pa">PA (Pacific Alliance)</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Saarc">
                SAARC (South Asian Association for Regional Cooperation)
              </Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <a>
              <Link to="/pages/RegionalBlocs/Usan">
                USAN (Union of South American Nations)
              </Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
