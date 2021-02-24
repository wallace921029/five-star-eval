# five-star-eval

[![yOc95F.png](https://s3.ax1x.com/2021/02/24/yOc95F.png)](https://imgtu.com/i/yOc95F)

```html
<!-- if your don't want to show score text, set 'show-score' as false -->
<!-- :show-score="false" -->
<five-star-eval
    v-for="(score, index) in scores"
    :key="index"
    :score="score"/>
```

```js
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
```
