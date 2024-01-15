// var
const output = document.querySelector("#output");
const newDate = new Date();
const mm = String(newDate.getMonth() + 1).padStart(2, "0");
const dd = String(newDate.getDate()).padStart(2, "0");
const yyyy = newDate.getFullYear();
const outputDate = `${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy}`;

// output
output.innerHTML = outputDate;
