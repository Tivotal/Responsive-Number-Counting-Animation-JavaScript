/* Created by Tivotal */

let cardNums = document.querySelectorAll(".num");

let interval = 4000;

cardNums.forEach((num) => {
  let startValue = 0;
  let endValue = parseInt(num.getAttribute("data-num"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    num.textContent = startValue;

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
