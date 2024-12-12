<template>
  <div class="container">
    <div class="carousel">
      <div class="item">ZARA</div>
      <div class="item">GUCCI</div>
      <div class="item">VERSACE</div>
      <div class="item">PRADA</div>
      <div class="item">Calvin Klein</div>

      <div class="item">ZARA</div>
      <div class="item">GUCCI</div>
      <div class="item">VERSACE</div>
      <div class="item">PRADA</div>
      <div class="item">Calvin Klein</div>

      <div class="item">ZARA</div>
      <div class="item">GUCCI</div>
      <div class="item">VERSACE</div>
      <div class="item">PRADA</div>
      <div class="item">Calvin Klein</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100px;
  background-color: black;
  padding: 5px 0;
  position: relative;

  .carousel {
    display: flex;
    white-space: nowrap;
    animation: scroll 15s linear infinite;
  }

  .item {
    font-family: "Courier New", Courier, monospace;
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin-right: 50px;
    flex-shrink: 0;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
