import FiveStarEval from './FiveStarEval/FiveStarEval'

FiveStarEval.install = function (Vue) {
  Vue.component(FiveStarEval.name, FiveStarEval)
}

export default FiveStarEval
