const amqp = require('amqplib')

module.exports = class RabbitMq {
    constructor(stringConenction, exchangeName){
        this.exchangeName = exchangeName;
        this._stringConnection = `${stringConenction}`;
    }

    async Connect(){
        this.connection = await amqp.connect(this._stringConnection);
        this.channel = await this.connection.createChannel();

        await this.channel.assertExchange(this.exchangeName, 'topic')
    }

    async Send(routingKey, data){
        const sent = this.channel.publish(this.exchangeName, routingKey, Buffer.from(JSON.stringify(data)))
        return sent;
    }
    
}