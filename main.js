let result = document.getElementById("display-result");
let del = document.getElementById("delete");

function clearDispaly() {
  result.value = "";
}
function display(value) {
  result.value += `${value}`;
}
function calc() {
  if (result.value === "") {
    result.value = "";
  } else {
    let expression = result.value;
    result.value = eval(expression);
  }
}
function deleteOneNumber() {
  result.value = result.value.slice(0, -1);
}
