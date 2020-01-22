
//HTML elements
let digitContainer = document.getElementById("digitContainer");
let operationContainer = document.getElementById("operationContainer");
let enter = document.getElementById("enterBtn");
let display = document.getElementById("display");
let historyCheckbox = document.getElementById("historyCheckbox");
let historyDisplay = document.getElementById("history");
//other variables
let num1 = "";
let num2 = "";
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
  if (operator == null) {
    //console.log(typeof e.target.id); String
    console.log(num1);
  
    num1 += e.target.id;
    display.innerHTML = num1;
    console.log("i am adding to num1");
    //console.log(typeof x);  Number
  } else {
    num2 += e.target.id;
    console.log("i am adding to num1");
    display.innerHTML = num2;
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
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
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
      case "power":
      result = Math.pow(num1, num2);
      symbol = "^";
      break;
      case "log":
      result = getBaseLog(num1, num2);
      symbol = "log";
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
  num1 = "";
  num2 = "";
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
      Number(records[i].result).toFixed(2);
    console.log(recordsString);
  }
  return recordsString;
}

function render(result, record) { 
  if (record.includes("null") == false && record.includes("undefined") == false){
    history += "<p>" + record + "</p>";
    display.innerHTML = parseInt(result, 10).toFixed(2);
  }
  
  if (historyCheckbox.checked == true) {
  historyDisplay.innerHTML = history;
  }
}
function getBaseLog(num1, num2) {
  return Math.log(num2) / Math.log(num1);
}