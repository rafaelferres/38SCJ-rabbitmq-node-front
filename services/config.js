const dotenv = require('dotenv')

dotenv.config()

module.exports = () => {
    return({
        rabbit: {
            connection: process.env.RABBITMQ_CONNECTION,
            exchange: process.env.RABBITMQ_EXCHANGE
        }
    })
}
