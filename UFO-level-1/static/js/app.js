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
var filterbutton = d3.select("#filter-btn");
var form = d3.select("form");
form.on("submit", submit);
filterbutton.on("click", submit);


// Create the function for filtering dates
function submit() {
    // clear table
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
// filter ufo sitings by input date
    var filteredDates = data.filter(x => x.datetime === inputValue);
    // fill in table with values
    filteredDates.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
