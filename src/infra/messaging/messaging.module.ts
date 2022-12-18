import { SendNotification } from "@application/use-cases/send-notification-use-case";
import { DatabaseModule } from "@helpers/database/database.module";
import { Module } from "@nestjs/common";
import { NotificationsController } from "./kafka/controllers/notifications.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
  imports: [DatabaseModule],
  providers: [
    KafkaConsumerService,
    SendNotification
  ],
  controllers: [NotificationsController]
})
export class MessagingModule { }