
var timeArr = ['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'];
var PikePlace = new salmonCookieShop ('Pike Place',77,88, 5.2);
var SeaTac =  new salmonCookieShop ('SeaTac', 6, 24, 1.2);
var SouthCenter = new salmonCookieShop ('SouthCenter', 11, 38, 1.9);
var BellevueSquare = new salmonCookieShop ('Bellevue Square', 20, 48, 3.3);

var table = document.getElementById('shopTable');
var tbody = document.getElementById('shopTable2');

function salmonCookieShop(name, minimum, maximum, averageCookiesPerCustomer){
  this.name= name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.salePerHour= [];
  this.total = 0;
  timeOfDay = [,'10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','Total'];


  this.customersPerHour = function(){
    return (Math.random()*(this.maximum - this.minimum + 1 )) +  this.minimum;
  };

  this.cookiesPerHour = function (){
    for(var i=0; i < timeOfDay.length; i++){
      var x = this.customersPerHour();
      var random = Math.round( x * this.averageCookiesPerCustomer);
      this.salePerHour.push(random);
      this.total += random;
    };

  };
  this.cookiesPerHour();


  this.makeItemRow = function(){
    var table = document.getElementById('shopTable');
    var rowOne = document.createElement('tr');

    table.appendChild(rowOne);
    for(var i=0; i< timeOfDay.length; i++ ){
      var timeCell = document.createElement('td');
      timeCell.textContent = timeOfDay[i];
      rowOne.appendChild(timeCell);
    }

    var table = document.getElementById('shopTable');
    var row = document.createElement('tr');
    table.appendChild(row);

    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    row.appendChild(nameCell);

    for(var i=0; i< this.salePerHour.length; i++ ){
      var aveCell = document.createElement('td');
      aveCell.textContent = this.salePerHour[i+1];
      row.appendChild(aveCell);
    }
  }
  this.makeItemRow();
}




var formEl= document.getElementById('form-data');
formEl.addEventListener('submit',function(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var ave = event.target.ave.value;

  new salmonCookieShop(location, min, max, ave);
});






















// }
// function makeItemRow(obj) {
//   var row = document.createElement('tr');
//
//   var nameCell = document.createElement('td');
//   nameCell.textContent = obj.name;
//   row.appendChild(nameCell);
//
//   var priceCell = document.createElement('td');
//   priceCell.textContent = obj.timeOfDay;
//   row.appendChild(priceCell);
//
//   var taxCell = document.createElement('td');
//   taxCell.textContent = obj.averageCookiesPerCustomer;
//   row.appendChild(taxCell);
//
//
//   tbody.appendChild(row);
// }

// push adds items to the end of the array and returns the new length//

// Justins way: I'm not sure I really understand what you were doing here//
// this.renderCookies = function(){
//   this.cookiesPerHour();

//this is how I was trying to do it on my own//
// this.renderAsRow = function(){
//   var shopTable = document.getElementById('shopTable');
//   var trElement = document.createElement('tr');
//   var nameData = document.createElement('td');
//   var minData = document.createElement('td');
//   var maxData = document.createElement('td');
//   var aveData = document.createElement('td');
//   nameData.textContent = this.name;
//   minData.textContent = this.minimum;
//   maxData.textContent = this.maximum;
//   aveData.textContent = this.averageCookiesPerCustomer;
//   trElment.appendChild(nameData);
//   trElment.appendChild(minData);
//   trElment.appendChild(maxData);
//   trElement.appendChild(aveData);
//   shopTable.appendChild(trElement);
// }


//
// // // shops///
//


// PikePlace.render();
// SeaTac.render();
// SouthCenter.render();
// BellevueSquare.render();
