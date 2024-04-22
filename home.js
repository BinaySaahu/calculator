var result = document.getElementById("result");

function appendChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = "";
}

function deleteChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  var expression = result.value;
  var answer = eval(expression);
  result.value = answer;
}
