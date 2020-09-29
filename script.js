"use strict";
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:
let intervalSet;
let isWorking = false;
function reset() {
  theTimer.innerHTML = "00:00:00";
  clearInterval(intervalSet);
  isWorking = false;
  testArea.value = "";
  testArea.disabled = false;
  testWrapper.style.borderColor = ("red")

}
function startTimer() {
  if (!isWorking) {
    isWorking = true;
    let countDownDate = new Date().getTime();
    intervalSet = setInterval(function () {
      let now = new Date().getTime();
      let distance = now - countDownDate;
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      function zeroLead(timeUnit) {
        return timeUnit.toString().padStart(2, "0");
      }
      theTimer.innerHTML =
        zeroLead(hours) + ":" + zeroLead(minutes) + ":" + zeroLead(seconds);
    }, 1000);
  }
  testWrapper.style.borderColor = ("red")
  if (originText === testArea.value) {
    clearInterval(intervalSet);
    testArea.disabled = true;
    testWrapper.style.borderColor = ("green")
  }
}

testArea.addEventListener("input", startTimer);
resetButton.addEventListener("click", reset);




