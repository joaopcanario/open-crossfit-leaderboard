import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import autoBind from 'react-autobind';

import logo from './logo.png';

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
    fetchAPI('Masculino');
  }

  fetchAPI(division) {
    const API_URL = 'http://cfopen-api.herokuapp.com/api/v1/open/leaderboards?name=Bahia&division='
    fetch(`${API_URL}${division}`)
    .then(res => res.json())
    .then(data => { data.forEach(this.addToLeaderboard) })
    .catch(err => { console.log('Error happened during fetching!', err); });
  }

  ordinalSuffix(i) {
      const j = i % 10;
      const k = i % 100;
      let suffix = 'th';

      if (j === 1 && k !== 11) {
          suffix = "st";
      } else if (j === 2 && k !== 12) {
          suffix = "nd";
      } else if (j === 3 && k !== 13) {
          suffix = "rd";
      }

      return `${i}${suffix}`;
  }


  addToLeaderboard(athlete, index) {
    const leaderboard = document.getElementById('leaderboardBody');
    const row = document.createElement('tr');

    const pos = document.createElement('th');
    pos.setAttribute('scope', 'row');
    pos.innerHTML = index + 1;

    const name = athlete.competitorName.split(" ");

    if (name.length > 3) {
      athlete.competitorName = `${name[0]} ${name[1]} ${name[name.length - 1]}`;
    }

    row.appendChild(pos);
    row.appendChild(this.insertLine(`<strong>${athlete.competitorName}</strong><br><small>${athlete.affiliateName}</small>`));
    row.appendChild(this.insertLine(`<strong>${athlete.overallScore}</strong>`));

    athlete.scores.forEach(score => {
      let value = '';

      if (score.rank > 0) {
        value = `<strong>${this.ordinalSuffix(score.rank)}</strong><br><small>(${score.scoreDisplay})</small>`;
      }

      row.appendChild(this.insertLine(value));
    });

    leaderboard.append(row);
  }

  insertLine(value) {
    let elem = document.createElement('td');
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
      fetchAPI('Masculino');
    } else if (attr === 'women') {
      this.setState({ isMen: '', isWomen: 'active' });
      fetchAPI('Feminino');
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
                  <th scope="col">Rank</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Pontos</th>
                  <th scope="col">18.1</th>
                  <th scope="col">18.2</th>
                  <th scope="col">18.2a</th>
                  <th scope="col">18.3</th>
                  <th scope="col">18.4</th>
                  <th scope="col">18.5</th>
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
