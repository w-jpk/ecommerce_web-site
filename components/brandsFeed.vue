<template>
  <div class="container">
    <div class="item">ZARA</div>
    <div class="item">GUCCI</div>
    <div class="item">VERSACE</div>
    <div class="item">PRADA</div>
    <div class="item">Calvin Klein</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: black;
  padding: 5px 5rem;

  .item {
    font-family: "Courier New", Courier, monospace;
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
}
</style>
