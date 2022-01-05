import { runSubA } from '@flypkg/suba'
import pkg from '../package.json'

export function init () {
  runSubA(`在 main 中执行，main 版本为：${pkg.version}`)
}
