import ServerController from './server/controller.js'
import DatabaseController from './database/controller.js'
import RoutesController from './routes/controller.js'

const start = async () => {
  const server = await ServerController.start()
  await RoutesController.registerOnServer(server)

  await DatabaseController.registerOnServer(server)
  await DatabaseController.connect(server)
}

start()
