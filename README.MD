<h1 align="center">Ignite Lab 4th Edition - Notifications Producer</h1>

<p align="center">

</p>

## Tecnologias

Produção:
- NestJS ()
- Prisma
- SQLite
- KafkaJS

Desenvolvimento:
- Jest
- TyperScript

## Projeto
É um serviço de notificações que permite criar, armazenar e gerenciar notificações, podendo ser utilizado por outras aplicações.

## Requisitos
1. Instalar o NodeJS e com ele instalado, utilizar o NPM para instalação dos demais módulos.

### Instalação dos módulos:
npm i -g @nestjs/cli
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
npm i --save @nestjs/microservices
npm i --save kafkajs

2. É necessário criar uma conta gratuita na [Upstash] (https://upstash.com/) para criar o serviço que atuará como um gateway via internet entre essa aplicação e o serviço de notificações.
Com esse serviço, mesmo que sua aplicação esteja fora do ar, ela ainda receberá as mensagens contidas pelo Kafka assim que estiver disponível.

3. Criar um producer para poder gerar validar que as notificações estão chegando na aplicação.