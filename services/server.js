const express = require('express')
const next = require('next')
const RabbitMq = require('./rabbitmq')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(async () => {
  const server = express()
  const _rabbitmq = new RabbitMq('amqp://guest:guest@localhost:5672', 'dronesEmailExchange')
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
    const data = await _rabbitmq.Send('drones.id.41414154', req.body)
    res.status(201).json({ data: data })
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})