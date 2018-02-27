import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import autoBind from 'react-autobind';

import logo from './logo.png';
import menData from './db/men_athletes';
import womenData from './db/women_athletes';
import Athlete from './Athlete';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      isMen: 'active',
      isWomen: '',
    };
  }

  componentDidMount() {
    menData.forEach(this.addToLeaderboard);
  }

  addToLeaderboard(athlete, index) {
    const leaderboard = document.getElementById('leaderboardBody');
    const row = document.createElement('tr');

    const pos = document.createElement('th');
    pos.setAttribute('scope', 'row');
    pos.innerHTML = index + 1;

    row.appendChild(pos);
    row.appendChild(this.createHTMLElement(athlete.competitorName));
    row.appendChild(this.createHTMLElement(athlete.affiliateName));
    row.appendChild(this.createHTMLElement(athlete.scores[0].scoreDisplay));
    row.appendChild(this.createHTMLElement('-'));
    row.appendChild(this.createHTMLElement('-'));
    row.appendChild(this.createHTMLElement('-'));
    row.appendChild(this.createHTMLElement('-'));
    row.appendChild(this.createHTMLElement(index + 1));

    leaderboard.append(row);
  }

  createHTMLElement(value) {
    var elem = document.createElement('td');
    elem.innerHTML = value;

    return elem;
  }

  toggleCategory(event) {
    const { target } = event;
    const attr = target.getAttribute('dataref');
    const leaderboard = document.getElementById('leaderboardBody');

    leaderboard.innerHTML = "";
    if (attr === 'men') {
      this.setState({ isMen: 'active', isWomen: '' });
      menData.forEach(this.addToLeaderboard);
    } else if (attr === 'women') {
      this.setState({ isMen: '', isWomen: 'active' });
      womenData.forEach(this.addToLeaderboard);
    }
  }

  render() {
    const { isMen, isWomen, athletes } = this.state;
    console.log(athletes);
    const boostrap = {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
      crossorigin: 'anonymous',
    };

    return (
      <div className="App">
        <Helmet
          defaultTitle="2018 Open Crossfit Leaderboard - Bahia"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'description', content: '2018 Open Crossfit Leaderboard Bahia' },
          ]}
          link={[ boostrap ]}
        />

        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="Open Crossfit Bahia" />
            <h2>2018 Open Crossfit Leaderboard - Bahia</h2>
            <p className="lead">Acompanhe o leaderboard dos atletas baianos</p>

            <div className="row justify-content-md-center">
              <div className="col-md-auto col-lg-4">

                <div className="btn-group">
                  <button className={`btn btn-primary ${isMen}`} dataref="men" onClick={this.toggleCategory}>MASCULINO</button>
                  <button className={`btn btn-primary ${isWomen}`} dataref="women" onClick={this.toggleCategory}>FEMININO</button>
                </div>

              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table id="leaderboardTable" className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Box</th>
                  <th scope="col">18.1</th>
                  <th scope="col">18.2</th>
                  <th scope="col">18.3</th>
                  <th scope="col">18.4</th>
                  <th scope="col">18.5</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>

              <tbody id="leaderboardBody">
              </tbody>

            </table>
          </div>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2018 Open Crossfit Games Leaderboard Bahia</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/cristianossd" target="_blank" rel="noopener noreferrer">
                  Cristiano Santos
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://github.com/joaopcanario" target="_blank" rel="noopener noreferrer">
                  João Paulo Canário
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
