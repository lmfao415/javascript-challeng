// from data.js
var tableData = data;

// YOUR CODE HERE!

// Adds values to table on site
var tbody = d3.select("tbody");

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var filterButton = d3.select("#filter-btn");
var form = d3.select("form");
form.on("submit", submit);
filterButton.on("click", submit);


// Create the function for filtering dates
function submit() {
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

  
    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");





    var filteredDates = data.filter(x => x.datetime === inputDateValue && x.city === inputCityValue && x.state === inputStateValue && x.country === inputCountryValue && x.shape === inputShapeValue);
    filteredDates.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

var tableFilters = {
  datetime: "1/1/10",
  city: "benton",
  state: "ar",
  country: "us",
  shape: "circle"
};

// tableFilters.forEach(function(thing) {
//   console.log(thing);
// });


var users= data.filter(function(item) {
  for (var key in tableFilters) {
    if (item[key] === undefined || item[key] != tableFilters[key])
      return false;
  }
  return true;
});

console.log(users)

// filterData= tableFilters.filter(function(item) {
//   for (var key in filter) {
//     if (item[key] === undefined || item[key] != filter[key])
//       return false;
//   }
//   return true;
// });

// console.log(users)


// var allkeys = Object.keys(data[0]);
// var all_values = {};
// allkeys.forEach(x=>{
//   data.forEach(y=>{
//     if (!(x ))
//   })
// })