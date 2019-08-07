import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Europe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      europedados: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/europe")
      .then(response => response.json())
      .then(response => this.setState({ europedados: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Europe</h2>
        <div className="region__div">
        <p className="link__p">
            <a className="link__a">
              <Link to="/">Voltar para a Página Inicial</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.europedados.map(europec => (
            <div className="countryCard">
              <CountryCard
                name={europec.name}
                key={europec.name}
                population={europec.population.toLocaleString("pt-BR")}
                region={europec.region}
                capital={europec.capital}
                flag={europec.flag}
                currencies={
                  europec.currencies[0]["symbol"] +
                  "(" +
                  europec.currencies[0]["name"] +
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
