<style lang="scss" scoped>
.star-box {
  width: 100px;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <div class="star-box">
      <five-star-eval
          v-for="(score, index) in scores"
          :key="index"
          :score="score"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FiveStarEval from '../package/index'

Vue.use(FiveStarEval)

export default {
  name: 'App',
  data() {
    return {
      scores: [0.1, 0.5, 1.1, 1.5, 2.1, 2.7, 2.9, 3.5, 3.9, 4.3, 4.8]
    }
  }
}
</script>
