
'use strict';

var allItems = [];

var form = document.getElementById('form');

var table = document.getElementById('table');
var tbody = document.getElementById('table-body');
var tfoot = document.getElementsByTagName('tfoot')[0];

new Item('Pike Place',77,88, 5.2);
new Item('SeaTac', 6, 24, 1.2);
new Item('SouthCenter', 11, 38, 1.9);
new Item('Bellevue Square', 20, 48, 3.3);

function Item(location, min, max, ave) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.ave = ave;
  allItems.push(this);
}


function makeItemRow(obj) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = obj.location;
  row.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.min;
  row.appendChild(priceCell);

  var taxCell = document.createElement('td');
  taxCell.textContent = obj.max;
  row.appendChild(taxCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = obj.ave;
  row.appendChild(totalCell);

  tbody.appendChild(row);
}

function makeAllItemRows() {
  for (var item of allItems) {
    makeItemRow(item);
  }
}

// function makeTotalRow() {
//   var row = document.createElement('tr');
//
//   var totalCell = document.createElement('th');
//   totalCell.textContent = 'Total';
//   row.appendChild(totalCell);
//
//   var priceCell = document.createElement('th');
//   priceCell.textContent = grandTotals.price;
//   row.appendChild(priceCell);
//
//   var taxCell = document.createElement('th');
//   taxCell.textContent = grandTotals.tax;
//   row.appendChild(taxCell);
//
//   var totalCell = document.createElement('th');
//   totalCell.textContent = grandTotals.total;
//   row.appendChild(totalCell);
//
//   tfoot.appendChild(row);
// }


function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.min.value;
  var max = event.target.max.value;


  var newItem = new Item(location, min,max,ave);
  newItem.doAllTheMethods();

  makeItemRow(newItem);
  tfoot.innerHTML = ''
  makeTotalRow();

  event.target.name.value = null;
  event.target.price.value = null;
  event.target.location.value = null;
  event.target.min.value= null;
  event.target.min.value= null;
  event.target.max.value= null;
}

form.addEventListener('submit', handleFormSubmit);


makeAllItemRows();
makeTotalRow();
