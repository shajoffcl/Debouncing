const displayElem = document.getElementById("counter-display");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;
const handleClick = (action) => {
  console.log("handleClick");
  switch (action) {
    case "INCREMENT":
      count++;
      displayElem.innerText = count;
      break;
    case "DECREMENT":
      count--;
      displayElem.innerText = count;
      break;
    default:
      return;
  }
};

let intervalId;
const debounce = (fun, wait) => {
  return (...arg) => {
    clearTimeout(intervalId);
    intervalId = setTimeout(() => fun.apply(this, arg), wait);
  };
};

incrementButton.addEventListener("click", () =>
  debounce(handleClick, 3000)("INCREMENT")
);
decrementButton.addEventListener("click", () =>
  debounce(handleClick, 3000)("DECREMENT")
);
displayElem.innerText = count;
