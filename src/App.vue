<template>
  <div id="app">
    <!-- <home /> -->
    <router-view></router-view>
    <foo></foo>
  </div>
</template>

<script>
import foo from "@/views/footer.vue"
import home from "@/views/nominate.vue"
export default {
  components:{
    foo,
    home
  }
}
</script>

<style lang="scss" scoped>
  
</style>
