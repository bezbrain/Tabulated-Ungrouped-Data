const xBtn = document.querySelector(".x-btn");
const fBtn = document.querySelector(".f-btn");
const inputX = document.querySelector(".x-input");
const inputF = document.querySelector(".f-input");
const xValuesInput = document.querySelector(".x-values-input");
const fValuesInput = document.querySelector(".f-values-input");
const findMean = document.querySelector(".mean-btn");
const meanValue = document.querySelector(".mean-value");
const findMedian = document.querySelector(".median-btn");
const medianValue = document.querySelector(".median-value");
const findMode = document.querySelector(".mode-btn");
const modeValue = document.querySelector(".mode-value");
const clear = document.querySelector(".clear");

// =====>>>
// Program to input x and f values
// =====>>>
let xArr = [];
// X-Btn
xBtn.onclick = (e) => {
  e.preventDefault();
  xArr.push(Number(inputX.value));
  xValuesInput.textContent = xArr.join(", ");
  inputX.value = "";
  console.log(xArr);
};

let fArr = [];
// F-Btn
fBtn.onclick = (e) => {
  e.preventDefault();
  fArr.push(Number(inputF.value));
  fValuesInput.textContent = fArr.join(", ");
  inputF.value = "";
  console.log(fArr);
};
// End of Program to input x and f values

// =====>>>
// Program to find the mean
// =====>>>
function mean() {
  let sumOfFandX = 0;
  let sumOfF = 0;
  xArr.forEach((each, j) => {
    sumOfFandX += each * fArr[j];
    sumOfF += fArr[j];
  });
  //   console.log(sumOfFandX);
  //   console.log(sumOfF);
  let mean = sumOfFandX / sumOfF;
  meanValue.textContent = mean;
}

findMean.onclick = () => {
  mean();
};
// End Program to find the mean

// =====>>>
// Program to find the median
// =====>>>
function medianVal() {
  let medianClass = 0;
  let mapFArr = fArr.map((each) => {
    medianClass += each;
    return medianClass;
  });
  // console.log(mapFArr);

  if (medianClass % 2 == 0) {
    medianClass = medianClass / 2;
  } else {
    medianClass = (medianClass + 1) / 2;
  }
  // console.log(medianClass);

  let closestGreaterValue = null;
  function ascertainMedian(getMedianClass, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= getMedianClass) {
        closestGreaterValue = arr[i];
        break;
      }
    }
    return closestGreaterValue;
  }
  ascertainMedian(medianClass, mapFArr);
  // console.log(mapFArr);
  let fArrIndex = mapFArr.indexOf(closestGreaterValue);
  let xArrIndex = fArrIndex;
  let median = xArr[xArrIndex];
  medianValue.textContent = median;
}

findMedian.onclick = () => {
  medianVal();
};
// End of Program to find the median

// =====>>>
// Program to find the Mode
// =====>>>
function modalClass() {
  let maxVal = Math.max(...fArr);
  // console.log(maxVal);
  let fArrIndex = fArr.indexOf(maxVal);
  console.log(fArrIndex);
  let xArrIndex = fArrIndex;
  let maxVals = fArr.filter((val) => val === maxVal);

  // To find the mode in there are two or more same f as the highest frequencies
  if (maxVals.length > 1) {
    let modalFreq = [];
    for (let i = 0; i < fArr.length; i++) {
      let maxValueIndices = [];
      if (fArr[i] === fArr[fArrIndex]) {
        maxValueIndices.push(i);
      }
      console.log(maxValueIndices);
      xArrIndex = xArr[maxValueIndices];
      modalFreq.push(xArrIndex);
      modeValue.textContent = modalFreq.join(", ");
    }
  } else {
    mode = xArr[xArrIndex];
    modeValue.textContent = mode;
  }
}

findMode.onclick = () => {
  modalClass();
};
// End of Program to find the Mode

// Clear all Data
clear.onclick = () => {
  inputX.value = "";
  inputF.value = "";
  xValuesInput.textContent = "";
  fValuesInput.textContent = "";
  meanValue.textContent = "";
  medianValue.textContent = "";
  modeValue.textContent = "";
  xArr = [];
  fArr = [];
  console.log(xArr);
  console.log(fArr);
};
