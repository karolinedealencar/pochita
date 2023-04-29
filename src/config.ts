import { ipaddress } from 'convict-format-with-validator'
import dotenv from 'dotenv'
import convict from 'convict'

convict.addFormat(ipaddress)
dotenv.config()

const config = convict({
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT'
  },
  db: {
    connection_string: {
      doc: 'Database connection string',
      format: String,
      env: 'DATABASE_CONNECTION_STRING',
      default: ''
    }
  }
})

export default config
