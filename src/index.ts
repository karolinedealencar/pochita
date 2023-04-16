import ServerController from './server/controller.js'

const start = async () => {
  ServerController.start()
  await ServerController.registerRoutes()
}

start()
