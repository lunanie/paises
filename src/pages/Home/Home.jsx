import React, { Component } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import Region from "../../components/Region/Region";
import RegionalBlocs from "../../components/RegionalBlocs/RegionalBlocs";
import "./style.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosApiPaises: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => this.setState({ dadosApiPaises: response }))
      .catch((erro) => {
        throw erro;
      });
  }

  render() {
    return (
      <div className="main">
        <Region />
        <RegionalBlocs />
        <div className="pesquisa__div"></div>
        <div className="container">
          <div>
            <h2>Todos os Países</h2>
          </div>
        </div>

        <div className="countryList">
          {this.state.dadosApiPaises.map((country) => (
            <div key={country.name.common} className="countryCard">
              <CountryCard
                name={country.name}
                key={country.name}
                population={country.population.toLocaleString("pt-BR")}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
                // currencies={
                //   country.currencies[0]["symbol"] +
                //   "(" +
                //   country.currencies[0]["name"] +
                //   ")"
                // }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
