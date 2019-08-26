import React, { Component } from "react";
import CountryCard from "./components/CountryCard/CountryCard";
import Region from "./components/Region/Region";
import RegionalBlocs from "./components/RegionalBlocs/RegionalBlocs";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadosApiPaises: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(response => this.setState({ dadosApiPaises: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="main">
        <Region />
        <RegionalBlocs />
        <div className="pesquisa__div">
          <input
            id="pesquisarInput"
            class="input"
            type="search"
            placeholder="Nome ou Capital"
            aria-label="Pesquisar"
            onKeyUp="limpar(this.value)"
          />
          {/* <button
            id="pesquisarbtn"
            class="btnPesquisar"
            type="search"
            aria-label="Search"
          >
            Pesquisar
          </button> */}
        </div>
        <div className="container">
          <div>
            <h2>Todos os Países</h2>
          </div>
        </div>

        <div className="countryList">
          {this.state.dadosApiPaises.map(country => (
            <div className="countryCard">
              <CountryCard
                name={country.name}
                key={country.name}
                population={country.population.toLocaleString("pt-BR")}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                currencies={
                  country.currencies[0]["symbol"] +
                  "(" +
                  country.currencies[0]["name"] +
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
