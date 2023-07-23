import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Cais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionalblocdata: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/regionalbloc/cais")
      .then((response) => response.json())
      .then((response) => this.setState({ regionalblocdata: response }))
      .catch((erro) => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>CAIS (Central American Integration System)</h2>
        <div className="region__div">
          <p className="link__p">
            <Link className="link__a" to="/">
              Voltar para a Página Inicial
            </Link>
          </p>
        </div>
        <div className="countryList">
          {this.state.regionalblocdata.map((regionalbloccard) => (
            <div key={regionalbloccard.name} className="countryCard">
              <CountryCard
                name={regionalbloccard.name}
                key={regionalbloccard.name}
                population={regionalbloccard.population.toLocaleString("pt-BR")}
                region={regionalbloccard.region}
                capital={regionalbloccard.capital}
                flag={regionalbloccard.flags.png}
                currencies={
                  regionalbloccard.currencies[0]["symbol"] +
                  "(" +
                  regionalbloccard.currencies[0]["name"] +
                  ")"
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
