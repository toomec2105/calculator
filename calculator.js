
//HTML elements
let digitContainer = document.getElementById("digitContainer");
let operationContainer = document.getElementById("operationContainer");
let enter = document.getElementById("enterBtn");
let display = document.getElementById("display");
let historyCheckbox = document.getElementById("historyCheckbox");
let historyDisplay = document.getElementById("history");
//other variables
let num1 = null;
let num2 = null;
let operator = null;
let records = [];
let history = ""; //"<h3>History : </h3>";
// parent listening for children events

//Event Listeners
digitContainer.addEventListener("click", function fn(e) {
  if (e.target.id === "enterBtn") {
    calculate();
    return;
  }
  if (num1 == null) {
    //console.log(typeof e.target.id); String
    num1 = parseInt(e.target.id, 10);
    //console.log(typeof x);  Number
  } else {
    num2 = parseInt(e.target.id, 10);
  }
});

operationContainer.addEventListener("click", function fn(e) {
  operator = e.target.id;
});

historyCheckbox.addEventListener("click", function fn(e) {
  if (historyCheckbox.checked == true) {
    historyDisplay.innerHTML = history;
  }else{
    historyDisplay.innerHTML = null;
  }
});

//main methods
function calculate() {
  let result;
  let symbol;
  switch (operator) {
    case "add":
      result = num1 + num2;
      symbol = "+";
      break;
    case "subtract":
      result = num1 - num2;
      symbol = "-";
      break;
    case "multiply":
      result = num1 * num2;
      symbol = "*";
      break;
    case "divide":
      result = num1 / num2;
      symbol = "/";
      break;
  }

  let record = createRecord(num1, num2, symbol, result);
  records.push(record);

  let recordString = createRecordString();
  render(result, recordString);
  clearData();
}

//helpers
function clearData() {
  num1 = null;
  num2 = null;
  operator = null;
}

function createRecord(num1, num2, symbol, result) {
  let record = {
    num1: num1,
    num2: num2,
    symbol: symbol,
    result: result
  };
  return record;
}

function createRecordString() {
  let recordsString;
  for (let i = 0; i < records.length; i++) {
    recordsString =
      records[i].num1 +
      " " +
      records[i].symbol +
      " " +
      records[i].num2 +
      " = " +
      records[i].result;
    console.log(recordsString);
  }
  return recordsString;
}

function render(result, record) { 
  if (record.includes("null") == false && record.includes("undefined") == false){
    history += "<p>" + record + "</p>";
    display.innerHTML = result;
  }
  
  if (historyCheckbox.checked == true) {
  historyDisplay.innerHTML = history;
  }
}
