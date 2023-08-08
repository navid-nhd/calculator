<template>
  <main class="main">
    <div class="result">
      <div>
        {{ screenValue }}
      </div>
      <div>{{ ultimateResult }}</div>
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
  "",
  "",
  "",
  "/",
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
  ".",
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
const updateScreen = (param) => {
  console.log(calcInnerData.leftVal);
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
    if (!calcInnerData.rightVal.length || calcInnerData.rightVal === "0") {
      calcInnerData.operator = param;
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
  width: 400px;
  background-color: rgb(37 45 68);
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.result {
  height: 100px;
  background-color: rgb(24 31 50);
  color: white;
  font-size: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
}
.button-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 50px);
  gap: 9px;
  padding: 30px;
}
.secondary {
  background-color: rgb(234 227 219);
  color: black;
  font-size: 1.9rem;
  font-weight: bold;
  border-radius: 10px;
}
.secondary:hover {
  background-color: rgb(189, 187, 184);
}
</style>
