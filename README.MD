<h1 align="center">Ignite Lab 4th Edition - Notifications Service</h1>

<p>
  Projeto criado na 4ª edição do Ignite Lab da [Rocketseat](https://www.rocketseat.com.br/) onde criamos um serviço super maneiro para gerenciamento de notificações.
</p>
<p>
  No evento utilizamos os conceitos de inversão e injeção de depêndencias, além de aplicar de forma extensa o uso de classes no JavaScript, o que aliado ao TypeScript gera um grande ganho de produtividade na manutenção do código.
</p>

## Tecnologias
- <a href="https://docs.nestjs.com/">NestJS / JestJS</a>
- <a href="https://www.prisma.io/docs">Prisma / SQLite</a>
- <a href="https://kafka.js.org/">KafkaJS</a>
- <a href="https://www.typescriptlang.org/">TypeScript</a>

## Projeto
Criar um serviço de notificações que permitirá criar, armazenar e gerenciar notificações, podendo ser utilizado por outras aplicações.

## Requisitos

Instalar o NodeJS em seu computador e com ele instalado, utilizar o NPM para instalação dos demais módulos.

<p>npm i -g @nestjs/cli</p>
<p>npm i prisma -D</p>
<p>npm i @prisma/client</p>
<p>npx prisma init --datasource-provider SQLite</p>
<p>npm i --save @nestjs/microservices</p>
<p>npm i --save kafkajs</p>

É necessário criar uma conta gratuita na <a href="https://upstash.com/">Upstash</a> e nela, criar um serviço do Kafka que atuará como um gateway via internet entre um producer aplicação e o serviço de notificações.
O usuário e senha do serviço criado no Upstash devem ser inseridos no arquivo /src/infra/messaging/kafka/kafka-consumer.service.ts
Com esse serviço, mesmo que sua aplicação esteja fora do ar, ela ainda receberá as mensagens contidas pelo Kafka assim que voltar a ficar disponível.

Criar um producer para poder validar que as notificações estão chegando na aplicação.
[Aqui](https://github.com/Wanderson-Alves-do-Nascimento/rocketseat-ignitelab4th-kafkaproducer) deixo um exemplo de producer utilizado na finalização do evento. Para acessar o vídeo, clique <a href="https://www.youtube.com/watch?v=7nngNeoyMbM">aqui</a>. 
