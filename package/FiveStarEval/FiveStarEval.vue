<style lang="scss" scoped src="./five-star-eval.scss"/>

<template>
  <div class="five-star-eval">
    <div class="star-box">
      <div
          class="star-box__bg-1"
          :style="style1"/>
      <div
          class="star-box__bg-2"
          :style="style2"/>
      <div class="star"/>
    </div>
    <div
        v-if="showScore"
        class="score-box"
        :style="style3">
      <span>{{ score }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiveStarEval',
  props: {
    // 分数
    // 0-5分之间
    score: {
      type: Number,
      default: 0
    },
    // 五角星未激活颜色
    inactiveColor: {
      type: String,
      default: '#d5d5d5'
    },
    // 五角星颜色
    activeColor: {
      type: String,
      default: 'orange'
    },
    // 展示分数
    showScore: {
      type: Boolean,
      default: false
    },
    // 分数颜色
    scoreColor: {
      type: String,
      default: '#666'
    }
  },
  data() {
    return {
      style1: {
        backgroundColor: '#d5d5d5'
      },
      style2: {
        width: '0px',
        backgroundColor: 'orange'
      },
      style3: {
        color: '#666'
      }
    }
  },
  methods: {
    initialize() {
      // style1
      this.style1.backgroundColor = this.inactiveColor

      // style2
      this.style2.width = (this.score / 5 * 84) + 'px'
      this.style2.backgroundColor = this.activeColor

      // style3
      this.style3.color = this.scoreColor
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
