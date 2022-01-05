import pkg from '../package.json'

export function logMessage (name, version, message) {
  console.log(`===================

${name}@${version}: ${message}

===================`)
}

export function runSubA (msg = 'default run') {
  logMessage('subA', pkg.version, msg)
}
