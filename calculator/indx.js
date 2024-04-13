let form_element = document.querySelectorAll(".form");
let button = document.querySelector(".btn");

let form = document.querySelector("form");
let showresult = document.querySelector(".showresult");

showresult.style.color = "white";
showresult.style.backgroundColor = "red";

button.addEventListener("click", (e) => {
  e.preventDefault();

  let first_number = parseFloat(form_element[0][0].value.trim());
  let operator_number = form_element[0][1].value;
  let second_number = parseFloat(form_element[0][2].value.trim());

  if (
    !isNaN(first_number) &&
    !isNaN(second_number) &&
    !isNaN(operator_number)
  ) {
    let lastresult = result(first_number, operator_number, second_number);

    showresult.innerHTML = `The result is=${lastresult}`;
    showresult.style.color = "white";
    showresult.style.backgroundColor = "blue";
  } else if (
    isNaN(first_number) ||
    (!isNaN(second_number) && !isNaN(operator_number))
  ) {
    showresult.innerHTML = "put the first numbers";
  } else if (
    (!isNaN(first_number) || !isNaN(second_number)) &&
    isNaN(operator_number)
  ) {
    showresult.innerHTML = "select the operator";
  } else if (
    (!isNaN(first_number) || !isNaN(operator_number)) &&
    isNaN(second_number)
  ) {
    showresult.innerHTML = "put the second numbers";
  }
});

function result(first_number, operator_number, second_number) {
  if (operator_number == 1) {
    return addition(first_number, second_number);
  } else if (operator_number == 2) {
    return subtraction(first_number, second_number);
  } else if (operator_number == 3) {
    return multiplication(first_number, second_number);
  } else if (operator_number == 4) {
    return division(first_number, second_number);
  }
}

function addition(val1, val2) {
  add = val1 + val2;

  return add;
}
function subtraction(val1, val2) {
  sub = val1 - val2;

  return sub;
}
function multiplication(val1, val2) {
  multi = val1 * val2;

  return multi;
}

function division(val1, val2) {
  divis = val1 / val2;

  return divis;
}