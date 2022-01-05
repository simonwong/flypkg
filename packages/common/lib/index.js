import { runSubA } from '@flypkg/suba'
import pkg from '../package.json'

export function init () {
  runSubA(`在 common 中执行，common 版本为：${pkg.version}`)
}
