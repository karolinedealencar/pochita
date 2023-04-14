const ServerController = require('./server/controller')

const start = () => {
  console.log('Starting program')
  ServerController.start()
}

start()
