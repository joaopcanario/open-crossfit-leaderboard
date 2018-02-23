(function main() {
  var menLeaderboardTable = document.getElementById('menLeaderboardTable');
  var menLeaderboard = document.getElementById('menLeaderboardBody');

  menLeaderboardTable.style = 'display: none';

  var womenLeaderboardTable = document.getElementById('womenLeaderboardTable');
  var womenLeaderboard = document.getElementById('womenLeaderboardBody');

  womenLeaderboardTable.style = 'display: none';

  loadJSON('assets/data/men_athletes.json', function (athletes){
    addToLeaderboard(JSON.parse(athletes), menLeaderboard);
  });

  loadJSON('assets/data/women_athletes.json', function (athletes){
    addToLeaderboard(JSON.parse(athletes), womenLeaderboard);
  });

  document.getElementById('menBt').addEventListener('click', function(e) {
    e.preventDefault();

    menLeaderboardTable.style = 'display: block';
    womenLeaderboardTable.style = 'display: none';
  });

  document.getElementById('womenBt').addEventListener('click', function(e) {
    e.preventDefault();

    menLeaderboardTable.style = 'display: none';
    womenLeaderboardTable.style = 'display: block';
  });

  menLeaderboardTable.style = 'display: block';
})();

function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', file, true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };

  xobj.send(null);
}

function addToLeaderboard(athletes, leaderboard) {
  athletes.forEach((athleteData, pos) => {
    var athlete = new Athlete(athleteData, pos);
    var row = athlete.format();

    leaderboard.appendChild(row);
  });
}
