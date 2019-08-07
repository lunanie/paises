import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Africa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      africadados: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/africa")
      .then(response => response.json())
      .then(response => this.setState({ africadados: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Africa</h2>
        <div className="region__div">
          <p className="link__p">
            <a className="link__a">
              <Link to="/">Voltar para a Página Inicial</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.africadados.map(africac => (
            <div className="countryCard">
              <CountryCard
                name={africac.name}
                key={africac.name}
                population={africac.population.toLocaleString("pt-BR")}
                region={africac.region}
                capital={africac.capital}
                flag={africac.flag}
                currencies={
                  africac.currencies[0]["symbol"] +
                  "(" +
                  africac.currencies[0]["name"] +
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
