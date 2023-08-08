<template>
  <main class="main">
    <div class="result">12</div>
    <div class="button-wrapper">
      <button
        class="secondary"
        v-for="(item, index) in buttonList"
        :key="index"
      >
        {{ item }}
      </button>
    </div>
  </main>
</template>
<script setup>
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
</script>
<style scoped>
.main {
  width: 900px;
  background-color: rgb(37 45 68);
}
.result {
  height: 100px;
  background-color: rgb(24 31 50);
  color: white;
  font-size: 2rem;
}
.button-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px 100px 100px;
  gap: 4px;
  padding: 50px;
}
.secondary {
  background-color: rgb(234 227 219);
  color: black;
  font-size: 2rem;
  font-weight: bold;
}
</style>
