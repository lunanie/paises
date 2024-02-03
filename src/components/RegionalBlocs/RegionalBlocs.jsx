import React from 'react';
import { Link } from 'react-router-dom';

export default function RegionalBlocs(props) {
  return (
    <div className="container">
      <h2>Blocos Regionais</h2>
      <div className="regionalBloc">
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/al">AL (Arab League)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/asean">ASEAN (Association of Southeast Asian Nations)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/au">AU (African Union)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/cais">CAIS (Central American Integration System)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/caricom">CARICOM (Caribbean Community)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/cefta">CEFTA (Central European Free Trade Agreement)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/eeu">EEU (Eurasian Economic Union)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/efta">EFTA (European Free Trade Association)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/eu">EU (European Union)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/nafta">NAFTA (North American Free Trade Agreement)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/pa">PA (Pacific Alliance)</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/saarc">
              SAARC (South Asian Association for Regional Cooperation)
            </Link>
          </p>
        </div>
        <div className="region__div">
          <p className="region__name">
            <Link to="regionalblocs/usan">USAN (Union of South American Nations)</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
