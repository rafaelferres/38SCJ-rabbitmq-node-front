# 38SCJ-rabbitmq-node-service

## Sobre
Trabalho da FIAP - Integrations & Development Tools

## Funcionamento
A cada 10 segundos é verificado se todas as informações foram preenchidas e são válidas, caso sim é enviado as informações para a exchange (topic), onde o consumer irá verificar se a temperatura é >= 35 ou <= 0 ou a umidade for <= 15, caso caia nessas condições será enviado um e-mail para o destinatario configurado.

## Arquitetura
O serviço foi divido em duas parte. Uma com Next.js (Front-End e Back-end Producer) e um Consumer.
![Arquitetura do Serviço](https://i.imgur.com/AmZ2ESs.jpg)


## Instalações
### RabbitMQ
Rode em seu console o seguinte comando:
```bash 
docker run -d --name rabbit -p 5672:5672 -p 5673:5673 -p 15672:15672 rabbitmq:3-management
```
### Back-end
Rode em seu console os seguintes comandos:
```bash
git clone https://github.com/rafaelferres/38SCJ-rabbitmq-node-service.git
```
Crie um arquivo chamado .env na raiz do projeto com as seguintes informações
```bash
#RABBITMQ
RABBITMQ_CONNECTION=enderecorabbitmq
RABBITMQ_QUEUE=dronesEmail
RABBITMQ_EXCHANGE=dronesEmailExchange

#EMAIL
SMTP_HOST=enderecosmtp
SMTP_PORT=portsmtp
SMTP_USER=usuariosmtp
SMTP_PASS=senhasmtp
EMAIL_TO=destinario
EMAIL_FROM=remetente
EMAIL_SUBJECT=assuntoemail
```
Rode o seguinte comando no seu console para instalar as dependencias:
```bash
npm install
#ou
yarn
```
Inicie o serviço rodando o comando em seu console:
```bash
npm run-script start
#or
yarn start
```

### Front-end
Rode em seu console o seguintes comando:
```bash
git clone https://github.com/rafaelferres/38SCJ-rabbitmq-node-front.git
```

Crie um arquivo chamado .env na raiz do projeto com as seguintes informações
```bash
#RABBITMQ
RABBITMQ_CONNECTION=enderecorabbitmq
RABBITMQ_EXCHANGE=dronesEmailExchange
```

Rode o seguinte comando no seu console para instalar as dependencias:
```bash
npm install
#ou
yarn
```

Inicie o serviço rodando o comando em seu console:
```bash
npm run-script start
#or
yarn start
```