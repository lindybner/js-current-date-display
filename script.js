// var
const output = document.querySelector("#output");
const newDate = new Date();
let mm;
let dd;
let yyyy;
let outputDate;

// fn
function setMonth() {
  mm = newDate.getMonth;
  return mm;
}

function setDay() {
  dd = newDate.getDate;
  return dd;
}

function setYear() {
  yyyy = newDate.getFullYear;
  return yyyy;
}

// set outputDate
function setOutPutDate(mm, dd, yyyy) {
  outputDate = `${mm}-${dd}-${yyyy}`;
  return outputDate;
}

// output date to output
function outputDate(outputDate) {
  output.innerHTML = outputDate;
}

// call outputDate fn
outputDate();
