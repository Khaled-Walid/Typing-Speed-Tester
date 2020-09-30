"use strict";
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const testText = document.querySelector(".intro p");
// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:
let intervalSet;
let isWorking = false;
originText.innerHTML = `${testText.textContent}`;
function reset() {
  theTimer.innerHTML = "00:00:00";
  clearInterval(intervalSet);
  isWorking = false;
  testArea.value = "";
  testArea.disabled = false;
  testWrapper.style.borderColor = "gray";
}
function startTimer() {
  if (!isWorking) {
    isWorking = true;
    let countDownDate = new Date().getTime();
    intervalSet = setInterval(function () {
      let now = new Date().getTime();
      let distance = now - countDownDate;
      let minutes = Math.floor(distance / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let cs = Math.floor((distance % 1000) / 10);
      function zeroLead(timeUnit) {
        return timeUnit.toString().padStart(2, "0");
      }
      console.log(distance);
      theTimer.innerHTML =
        zeroLead(minutes) + ":" + zeroLead(seconds) + ":" + zeroLead(cs);
    }, 1);
  }
  (() => {
    let subString = originText.textContent.substr(0, testArea.value.length);
    if (testArea.value === subString) {
      testWrapper.style.borderColor = "cyan";
    } else {
      testWrapper.style.borderColor = "red";
    }
  })();
  if (originText.textContent === testArea.value) {
    clearInterval(intervalSet);
    testArea.disabled = true;
    testWrapper.style.borderColor = "green";
  }
}

testArea.addEventListener("input", startTimer);
resetButton.addEventListener("click", reset);
