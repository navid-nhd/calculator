
<template>
  <main>
      <div class="button-wrapper">
            <button onclick="addAction('%')" class="secondary">%</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('CE')" class="secondary">CE</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('C')" class="secondary">C</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('del')" class="secondary">␡</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('1/x')" class="secondary"><sup>1</sup>/<sub>x</sub></button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('x^2')" class="secondary">x<sup>2</sup></button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('√x')" class="secondary">√x</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('÷')" class="secondary">÷</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('7')">7</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('8')">8</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('9')">9</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('×')" class="secondary">×</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('4')">4</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('5')">5</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('6')">6</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('-')" class="secondary">-</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('1')">1</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('2')">2</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('3')">3</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addAction('+')" class="secondary">+</button>
        </div>
        <div class="button-wrapper">
            <button>±</button>
        </div>
        <div class="button-wrapper">
            <button onclick="addNumber('0')">0</button>
        </div>
        <div class="button-wrapper">
            <button>.</button>
        </div>
        <div class="button-wrapper">
            <button onclick="calc()" class="accent">=</button>
        </div>
  </main>
</template>
<script setup>

</script>
<style scoped>
body {
    background-color: var(--primary-color);
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

:root {
    --primary-color: #313131;
    --secondary-color: #525252;
    --accent-color: #CA3E47;
    --result-height: 30%;
}

.result {
    height: var(--result-height);
    color: white;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    display: flex;
    padding: 0 12px;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    justify-content: flex-end;
}

.body {
    height: calc(100% -  var(--result-height));
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.button-wrapper {
    flex-grow: 0;
    width: 25%;
}
.button-wrapper button {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    color: white;
    border: solid 3px var(--primary-color);
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    transition: all 300ms;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.button-wrapper button:hover {
    opacity: 0.6;
}

.button-wrapper button.secondary {
    opacity: 0.6;
}
.button-wrapper button.secondary:hover {
    opacity: 1;
}
.button-wrapper button.accent {
    background-color: var(--accent-color);
}
</style>

