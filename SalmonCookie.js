// All Stores capacity is 60
//pp= pike place location  //
// table with location, time, cookies sold that hour and total per day

// var allItems = [];
var PikePlace = new salmonCookieShop ('Pike Place',77,88, 5.2);
var SeaTac =  new salmonCookieShop ('SeaTac', 6, 24, 1.2);
var SouthCenter = new salmonCookieShop ('SouthCenter', 11, 38, 1.9);
var BellevueSquare = new salmonCookieShop ('Bellevue Square', 20, 48, 3.3);

var table = document.getElementById('shopTable');
var tbody = document.getElementById('shopTable2');

function salmonCookieShop(name, minimum, maximum, averageCookiesPerCustomer){
  console.log('~~~~');
  this.name= name;
  console.log('name',name);
  this.minimum = minimum;
  console.log('minimum', minimum);
  this.maximum = maximum;
  console.log('maximum', maximum);
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  console.log('averageCookiesPerCustomer',averageCookiesPerCustomer);
  timeOfDay = ['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'];
  console.log('timeOfDay',timeOfDay);

  //sale of cookies per customer//
  this.salePerHour= [];



  //Random number of customers//
  this.customersPerHour = function(){
    console.log('customersPerHour');
    console.log('maximum, minimum',this.maximum, this.minimum );
    return (Math.random()*(this.maximum - this.minimum + 1 )) +  this.minimum;
  };
  console.log('random customer per hour',this.customersPerHour());


  //cookies per hour//

  this.cookiesPerHour = function (){
    // console.log('TOD array length', timeOfDay.length);
    // console.log('random customer per hour before loop',this.customersPerHour());
    for(var i=0; i < timeOfDay.length; i++){
      // console.log('random customer per hour after loop',this.customersPerHour());
      var x = this.customersPerHour();
      var random = Math.round( x * this.averageCookiesPerCustomer);
      this.salePerHour.push(random);
    };

    // console.log(this.salePerHour);
    // console.log(this.cookiesPerHour());
  };
  this.cookiesPerHour();
  // console.log('salePerHour', this.cookiesPerHour());
  this.makeItemRow = function(){
    var table = document.getElementById('shopTable');
    var row = document.createElement('tr');
    table.appendChild(row);

    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    row.appendChild(nameCell);

    for(var i=0; i< this.salePerHour.length; i++ ){
      var aveCell = document.createElement('td');
      aveCell.textContent = this.salePerHour[i];
      row.appendChild(aveCell);
    }
  }
  this.makeItemRow();
}

////Lab 7 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^////////
////Lab 8vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//////



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
