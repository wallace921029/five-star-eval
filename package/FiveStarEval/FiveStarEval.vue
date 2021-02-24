<style lang="scss" scoped src="./five-star-eval.scss"/>

<template>
  <div class="five-star-eval">
    <div
        ref="fiveStarEvalStarBox"
        class="five-star-eval__star-box"
        :style="style">
    </div>
    <div
        v-if="showScore"
        class="five-star-eval__score-box">
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
    // 展示分数
    showScore: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      style: {
        // 星星高度
        height: '0px',
        backgroundPositionY: '0px'
      }
    }
  },
  methods: {
    initialize() {
      // 图片初始宽度 245
      // 图片初始高度 364
      // 图片中 11 行星星
      const width = this.$refs.fiveStarEvalStarBox.clientWidth
      const pictureHeight = width * 364 / 245
      const lineHeight = pictureHeight / 11
      this.style.height = lineHeight + 'px'

      if (this.score <= 0.25) this.style.backgroundPositionY = '0px'
      if (this.score > 0.25 && this.score <= 0.75) this.style.backgroundPositionY = `-${lineHeight}px`
      if (this.score > 0.75 && this.score <= 1.25) this.style.backgroundPositionY = `-${lineHeight * 2}px`
      if (this.score > 1.25 && this.score <= 1.75) this.style.backgroundPositionY = `-${lineHeight * 3}px`
      if (this.score > 1.75 && this.score <= 2.25) this.style.backgroundPositionY = `-${lineHeight * 4}px`
      if (this.score > 2.25 && this.score <= 2.75) this.style.backgroundPositionY = `-${lineHeight * 5}px`
      if (this.score > 2.75 && this.score <= 3.25) this.style.backgroundPositionY = `-${lineHeight * 6}px`
      if (this.score > 3.25 && this.score <= 3.75) this.style.backgroundPositionY = `-${lineHeight * 7}px`
      if (this.score > 3.75 && this.score <= 4.25) this.style.backgroundPositionY = `-${lineHeight * 8}px`
      if (this.score > 4.25 && this.score <= 4.75) this.style.backgroundPositionY = `-${lineHeight * 9}px`
      if (this.score > 4.75 && this.score <= 5) this.style.backgroundPositionY = `-${lineHeight * 10}px`
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
