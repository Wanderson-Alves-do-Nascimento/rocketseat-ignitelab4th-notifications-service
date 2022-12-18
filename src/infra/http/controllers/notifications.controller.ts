import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification-use-case';
import { CreateNotificatioBody } from '../dtos/create-notification-body';
import { NotificationViewModule } from '../view-modules/notification-view-module';
import { Patch } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { CancelNotification } from '@application/use-cases/cancel-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { idText } from 'typescript';
import { Get } from '@nestjs/common';


@Controller("notifications")
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications
  ) { }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    })
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string,) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    })
    return {
      count,
    }
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string,) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    })
    return {
      notifications: notifications.map(NotificationViewModule.toHTTP),
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    })
  }

  @Post()
  async create(@Body() body: CreateNotificatioBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    return {
      notification: NotificationViewModule.toHTTP(notification),
    }
  }
}
