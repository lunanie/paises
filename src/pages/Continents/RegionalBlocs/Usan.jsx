import { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../../components/CountryCard/CountryCard';

export default class Usan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionalblocdata: [],
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/regionalbloc/usan')
      .then((response) => response.json())
      .then((response) => this.setState({ regionalblocdata: response }))
      .catch((erro) => {
        console.error(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>USAN (Union of South American Nations)</h2>
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
                key={regionalbloccard.name}
                name={regionalbloccard.name}
                population={regionalbloccard.population.toLocaleString('pt-BR')}
                region={regionalbloccard.region}
                capital={regionalbloccard.capital}
                flag={regionalbloccard.flags.png}
                currencies={`${regionalbloccard.currencies[0].symbol}(${regionalbloccard.currencies[0].name})`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
