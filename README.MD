<h1 align="center">Ignite Lab 4th Edition - Notifications Service</h1>

<p>
  Projeto criado na 4ª edição do Ignite Lab da [Rocketseat](https://www.rocketseat.com.br/) onde criamos um serviço super maneiro para gerenciamento de notificações.
</p>
<p>
  No evento utilizamos os conceitos de inversão e injeção de depêndencias, além de aplicar de forma extensa o uso de classes no JavaScript, o que aliado ao TypeScript gera um grande ganho de produtividade na manutenção do código.
</p>

## Tecnologias
- [NestJS / JestJS] (https://docs.nestjs.com/)
- [Prisma / SQLite] (https://www.prisma.io/docs)
- [KafkaJS] (https://kafka.js.org/)
- [TypeScript] (https://www.typescriptlang.org/)

## Projeto
Criar um serviço de notificações que permitirá criar, armazenar e gerenciar notificações, podendo ser utilizado por outras aplicações.

## Requisitos

1. Instalar o NodeJS em seu computador e com ele instalado, utilizar o NPM para instalação dos demais módulos.

npm i -g @nestjs/cli
npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
npm i --save @nestjs/microservices
npm i --save kafkajs

2. É necessário criar uma conta gratuita na [Upstash] (https://upstash.com/) e nela, criar um serviço do Kafka que atuará como um gateway via internet entre um producer aplicação e o serviço de notificações.
O usuário e senha do serviço criado no Upstash devem ser inseridos no arquivo /src/infra/messaging/kafka/kafka-consumer.service.ts
Com esse serviço, mesmo que sua aplicação esteja fora do ar, ela ainda receberá as mensagens contidas pelo Kafka assim que voltar a ficar disponível.

3. Criar um producer para poder validar que as notificações estão chegando na aplicação.
[Aqui](https://github.com/Wanderson-Alves-do-Nascimento/rocketseat-ignitelab4th-kafkaproducer) deixo um exemplo de producer utilizado na finalização do evento. Para acessar o vídeo, clique <a href="https://www.youtube.com/watch?v=7nngNeoyMbM">aqui</a>. 
