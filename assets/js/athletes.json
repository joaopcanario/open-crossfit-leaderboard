var Athlete = function(athlete, pos) {
  this.position = pos;
  this.name = athlete.competitorName;
  this.affiliate = athlete.affiliateName;
  this.scores = [0, 0, 0, 0, 0];
  this.total = 0;
};

Athlete.prototype.format = function() {
  var row = document.createElement('tr');

  var pos = document.createElement('th');
  pos.setAttribute('scope', 'row');
  pos.innerHTML = this.position;

  row.appendChild(pos);
  row.appendChild(createHTMLElement(this.name));
  row.appendChild(createHTMLElement(this.affiliate));
  row.appendChild(createHTMLElement(this.scores[0]));
  row.appendChild(createHTMLElement(this.scores[1]));
  row.appendChild(createHTMLElement(this.scores[2]));
  row.appendChild(createHTMLElement(this.scores[3]));
  row.appendChild(createHTMLElement(this.scores[4]));
  row.appendChild(createHTMLElement(this.total));

  return row;
};

Athlete.prototype = Object.create(Athlete.prototype);

function createHTMLElement(value) {
  var elem = document.createElement('td');
  elem.innerHTML = value;

  return elem;
}
