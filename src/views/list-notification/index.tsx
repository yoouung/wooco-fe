import Header from '@/src/widgets/header'
import CardNotification from '@/src/features/notification/card-notification'
import Spacer from '@/src/shared/ui/Spacer'
import { useGetNotifications } from '@/src/entities/notification/query'

export default function ListNotification() {
  const { data: notificationData } = useGetNotifications()

  return (
    <>
      <Header title='알림' isBack />
      <Spacer height={20} />
      <div className='px-[20px] gap-[20px] w-full flex flex-col justify-between'>
        {notificationData &&
          [...notificationData]
            .reverse()
            .map((notification) => (
              <CardNotification
                key={notification.id}
                notification={notification}
              />
            ))}
      </div>
    </>
  )
}
