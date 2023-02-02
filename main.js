const xBtn = document.querySelector(".x-btn");
const fBtn = document.querySelector(".f-btn");
const inputX = document.querySelector(".x-input");
const inputF = document.querySelector(".f-input");
const xValuesInput = document.querySelector(".x-values-input");
const fValuesInput = document.querySelector(".f-values-input");
const findMean = document.querySelector(".mean-btn");
const meanValue = document.querySelector(".mean-value");
const findMedian = document.querySelector(".median-btn");

// =====>>>
// Program to input x and f values
// =====>>>
let xArr = [];
// X-Btn
xBtn.onclick = () => {
  xArr.push(Number(inputX.value));
  xValuesInput.textContent = xArr.join(", ");
  inputX.value = "";
  console.log(xArr);
};

let fArr = [];
// F-Btn
fBtn.onclick = () => {
  fArr.push(Number(inputF.value));
  fValuesInput.textContent = fArr.join(", ");
  inputF.value = "";
  console.log(fArr);
};
// =====>>>
// End of Program to input x and f values
// =====>>>

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
// =====>>>
// End Program to find the mean
// =====>>>

// =====>>>
// Program to find the median
// =====>>>
function medianVal() {
  let medianClass = 0;
  // fArr.forEach((each, j) => {
  //   medianClass += each;
  // });
  let mapFArr = fArr.map((each) => {
    medianClass += each;
    return medianClass;
  });
  console.log(mapFArr);

  if (medianClass % 2 == 0) {
    medianClass = medianClass / 2;
  } else {
    medianClass = (medianClass + 1) / 2;
  }
  console.log(medianClass);

  function ascertainMedian(getMedianClass, arr) {
    let closestGreaterValue = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= getMedianClass) {
        closestGreaterValue = arr[i];
        break;
      }
    }
    // return closestGreaterValue;
  }
  console.log(ascertainMedian(medianClass, mapFArr));
}

findMedian.onclick = () => {
  medianVal();
};
