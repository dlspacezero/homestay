<template>
  <div class="details-container">
    <div class="house-owner">房东介绍</div>
    <div class="evaluate">房客评价</div>
    <div class="mating">配套设施</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.details-container {
  & > div {
    background: #ffffff;
    box-shadow: 0px 1px 6px 0px rgba(84, 84, 85, 0.1);
    margin-top: 13px;
  }
  .house-owner {
    height: 263px;
  }
  .evaluate {
    height: 314px;
  }
  .mating {
    height: 257px;
  }
}
</style>