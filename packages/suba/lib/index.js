import pkg from '../package.json'

export function logMessage (name, version, message) {
  console.log(`===================

${name}@${version}: ${message}

===================`)
}

export function runSubA () {
  logMessage('subA', pkg.version, '在 subA 中执行，当前版本：0.1.0')
}
