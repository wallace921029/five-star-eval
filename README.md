# five-star-eval

[![yx59u8.png](https://s3.ax1x.com/2021/02/26/yx59u8.png)](https://imgtu.com/i/yx59u8)

```html
<!-- if your don't want to show score text, set 'show-score' as false -->
<!-- :show-score="false" -->
<div style="width: 80px;">
  <five-star-eval
      v-for="(score, index) in scores"
      :key="index"
      :score="score"/>
</div>
```

```js
import Vue from 'vue'
import FiveStarEval from 'five-star-eval'

Vue.use(FiveStarEval)

export default {
  name: 'App',
  data() {
    return {
      scores: [0.1, 0.5, 1.1, 1.5, 2.1, 2.7, 2.9, 3.5, 3.9, 4.3, 4.8]
    }
  }
}
```
