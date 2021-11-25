const range = document.querySelector("#range");
const discount = document.querySelector("#discount");
const rangeValue = document.querySelector("#range-value");
const princingT = document.querySelector("#price");

let price = 16;
let isDiscount = false;
//values of the range
const values = [10, 50, 100, 500, 1000];
const valuesPri = [8, 12, 16, 24, 36];
const gradientColorValues = [0, 25, 50, 75, 100];

// Background color in the range
const color = `linear-gradient(90deg, #10d5c2 ${gradientColorValues[2]}%, #fff ${gradientColorValues[2]}%)`;
range.style.background = color;

range.addEventListener("change", function (e) {
  //Change the background color
  const color = `linear-gradient(90deg, #10d5c2 ${
    gradientColorValues[range.value]
  }%, #fff ${gradientColorValues[range.value]}%)`;
  range.style.background = color;

  //Change the value of the range
  isDiscount ? calculate() : (price = valuesPri[range.value]);
  let views = "K";
  values[e.target.value] === 1000 ? (views = "M") : (views = "K");
  rangeValue.innerHTML = `${values[range.value]}${views}`;
  princingT.innerHTML = `${price}.00$`;
});

discount.addEventListener("change", function (e) {
  //Check if the discount is checked
  if (e.target.checked) {
    isDiscount = true;
    calculate();
    princingT.innerHTML = `${price}.00$`;
  } else {
    isDiscount = false;
    price = valuesPri[range.value];
    princingT.innerHTML = `${valuesPri[range.value]}.00$`;
  }
});

const calculate = () =>
  //Calculate the discount
  (price = parseInt(
    valuesPri[range.value] - (valuesPri[range.value] * 25) / 100
  ));
