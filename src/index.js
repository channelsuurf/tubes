import http from 'http'

import api from './server'

const server = http.createServer(api)
server.listen(api.get('port'))
server.on('error', onError)
server.on('listening', onListening)

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof api.get('port') === 'string'
    ? `Pipe ${api.get('port')}`
    : `Port ${api.get('port')}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `Pipe ${addr}`
    : `Port ${addr.port}`
  console.log(`✨ The magic's happening on port ${bind}`)
}
