<template>
  <main class="main">
    <div class="result">
      <div>
        {{ screenValue }}
      </div>
      <div class="text-3xl">{{ ultimateResult }}</div>
    </div>

    <div class="button-wrapper">
      <button
        class="secondary"
        v-for="(item, index) in buttonList"
        :key="index"
        @click="updateScreen(item)"
      >
        {{ item }}
      </button>
    </div>
  </main>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
const ultimateResult = ref("");
const buttonList = [
  "%",
  "CE",
  "C",
  "Del",
  "⅟",
  "x^2",
  "√",
  "÷",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "",
  "0",
  "",
  "=",
];
const calcInnerData = reactive({
  leftVal: "",
  operator: "",
  rightVal: "",
});
const screenValue = ref("");
const plus = (left, right) => {
  return parseInt(left) + parseInt(right);
};
const multiply = (left, right) => {
  return parseInt(left) * parseInt(right);
};
const divide = (left, right) => {
  return parseInt(left) / parseInt(right);
};
const minus = (left, right) => {
  return parseInt(left) - parseInt(right);
};
const powerTwo = (left) => {
  return Math.pow(left, 2);
};
const square = (left) => {
  return Math.sqrt(left);
};
const dataReset = () => {
  (calcInnerData.leftVal = ""),
    (calcInnerData.rightVal = ""),
    (calcInnerData.operator = ""),
    (ultimateResult.value = "");
};
const updateScreen = (param) => {
  if (ultimateResult.value) {
    dataReset();
  }
  if (param === "=") {
    if (calcInnerData.rightVal && calcInnerData.rightVal.slice(-1) !== "=") {
      calcInnerData.rightVal += " =";
      switch (calcInnerData.operator) {
        case "+":
          ultimateResult.value = plus(
            calcInnerData.leftVal,
            calcInnerData.rightVal
          );
          break;
        case "*":
          ultimateResult.value = multiply(
            calcInnerData.leftVal,
            calcInnerData.rightVal
          );
          break;
        case "÷":
          ultimateResult.value = divide(
            calcInnerData.leftVal,
            calcInnerData.rightVal
          );
          break;
        case "-":
          ultimateResult.value = minus(
            calcInnerData.leftVal,
            calcInnerData.rightVal
          );
          break;
        default:
          ultimateResult.value = "";
          break;
      }
      // resetCalc();
      // addNumber(result + "");
    } else {
      alert("Error");
    }
  } else if (!isNaN(parseInt(param))) {
    //if the param is a number
    if (calcInnerData.operator.length) {
      //if the lefVal is fullfilled
      if (calcInnerData.rightVal === "0") {
        calcInnerData.rightVal = param;
      } else {
        calcInnerData.rightVal += param;
      }
    } else {
      //if the left val is empty
      if (calcInnerData.leftVal === "0") {
        calcInnerData.leftVal = param;
      } else {
        calcInnerData.leftVal += param;
      }
    }
  } else {
    switch (param) {
      case "Del":
        if (calcInnerData.rightVal.length) {
          if (calcInnerData.rightVal === "") {
            calcInnerData.rightVal = "0";
          }
          calcInnerData.rightVal = calcInnerData.rightVal.slice(0, -1);
        } else if (calcInnerData.operator.length) {
          calcInnerData.operator = "";
        } else {
          if (calcInnerData.leftVal === "") {
            calcInnerData.leftVal = "0";
          } else {
            calcInnerData.leftVal = calcInnerData.leftVal.slice(0, -1);
          }
        }
        break;
      case "C":
      case "CE":
        dataReset();
        updateScreen("0");
        break;
      case "⅟":
        if (calcInnerData.rightVal.length) {
          dataReset();
          alert("error");
        } else if (calcInnerData.operator.length) {
          dataReset();
          alert("error");
        } else if (
          calcInnerData.leftVal.length &&
          calcInnerData.leftVal !== 0
        ) {
          ultimateResult.value = divide("1", calcInnerData.leftVal);
        }
        break;
      case "x^2":
        if (calcInnerData.rightVal.length) {
          dataReset();
          alert("error");
        } else if (calcInnerData.operator.length) {
          dataReset();
          alert("error");
        } else if (
          calcInnerData.leftVal.length &&
          calcInnerData.leftVal !== 0
        ) {
          ultimateResult.value = powerTwo(calcInnerData.leftVal);
        }
        break;
      case "√":
        if (calcInnerData.rightVal.length) {
          dataReset();
          alert("error");
        } else if (calcInnerData.operator.length) {
          dataReset();
          alert("error");
        } else if (
          calcInnerData.leftVal.length &&
          calcInnerData.leftVal !== 0
        ) {
          ultimateResult.value = square(calcInnerData.leftVal);
        }
        break;
      default:
        if (!calcInnerData.rightVal.length || calcInnerData.rightVal === "0") {
          calcInnerData.operator = param;
        }
        break;
    }
  }
};
watch(
  calcInnerData,
  () => {
    screenValue.value = "";
    Object.values(calcInnerData).map((item) => {
      screenValue.value += `${item} `;
    });
  },
  { deep: true }
);
</script>
<style scoped>
.main {
  @apply w-[400px] rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#252d44];
}
.result {
  @apply h-28 text-white text-2xl bg-[#181f32] rounded-[20px] flex flex-col items-start pl-8 pt-2 m-3;
}
.button-wrapper {
  @apply grid grid-rows-6 grid-cols-4 gap-2 p-6;
}
.secondary {
  @apply bg-[#eae3db] text-black text-3xl font-bold rounded-[10px] hover:bg-[#bdbbb8];
}
</style>
