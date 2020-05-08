import { logMessage, runSubA } from '@flypkg/suba'
import pkg from '../package.json'

export function init () {
  logMessage('main', pkg.version, '在 main 中执行')
  runSubA()
}
