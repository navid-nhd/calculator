<template>
  <main class="main">
    <div class="result">{{ screenValue }}</div>
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

const buttonList = [
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
  "+/-",
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
const updateScreen = (param) => {
  console.log(calcInnerData.leftVal);
  if (param === "=") {
    console.log("is equal");
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
    console.log("not number");
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
  width: 700px;
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
  align-items: center;
  padding-left: 40px;
}
.button-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 120px 120px 120px 120px;
  gap: 15px;
  padding: 50px;
}
.secondary {
  background-color: rgb(234 227 219);
  color: black;
  font-size: 2.2rem;
  font-weight: bold;
  border-radius: 10px;
}
.secondary:hover {
  background-color: rgb(189, 187, 184);
}
</style>
