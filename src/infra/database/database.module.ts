import { Module } from "@nestjs/common";
import { NotificationsRepository } from "src/app/repositiories/notifications-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  imports: [DatabaseModule],
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    }
  ],
  exports: [
    NotificationsRepository,
  ]
})
export class DatabaseModule { }
