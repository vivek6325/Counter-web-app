document.addEventListener("DOMContentLoaded", function () {
  let counterElement = document.getElementById("counterValue");

  window.onIncrement = function () {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.style.color =
      updatedCounterValue > 0
        ? "green"
        : updatedCounterValue < 0
        ? "red"
        : "black";
    counterElement.textContent = updatedCounterValue;
  };

  window.onDecrement = function () {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.style.color =
      updatedCounterValue > 0
        ? "green"
        : updatedCounterValue < 0
        ? "red"
        : "black";
    counterElement.textContent = updatedCounterValue;
  };

  window.onReset = function () {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
  };
});
