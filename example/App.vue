<style lang="scss" scoped>
.star-box {
  width: 100px;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <div class="star-box">
      <five-star-eval :score="3.2"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FiveStarEval from '../package/index'

Vue.use(FiveStarEval)

export default {
  name: 'App'
}
</script>
