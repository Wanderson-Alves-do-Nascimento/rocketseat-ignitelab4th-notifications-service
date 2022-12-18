import { OnModuleDestroy } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['amusing-ladybug-10879-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: '***Your_Username***',
          password: '***Your_Password***',
        },
        ssl: true,
      }
    });
  }
  async onModuleDestroy() {
    await this.close();
  }

} 
