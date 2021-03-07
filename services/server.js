const express = require('express')
const next = require('next')
const RabbitMq = require('./rabbitmq')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getConfig = require('./config')    
const config = getConfig();
const dotenv = require('dotenv')

dotenv.config()

app.prepare()
.then(async () => {
  const server = express()
  const _rabbitmq = new RabbitMq(config.rabbit.connection, config.rabbit.exchange)
  await _rabbitmq.Connect()

  server.use(express.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

  server.post('/api/send', async (req, res) => {
    try{
      const data = await _rabbitmq.Send(`drones.id.${req.body.idDrone}`, req.body)
      if(data){
        res.status(201).send()
      }else{
        res.status(500).send()
      }
    }catch(err){
      res.status(500).json({error: err.message})
    }
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})