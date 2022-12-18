import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification-use-case"

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'New notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository[0] = notification)
  });
});