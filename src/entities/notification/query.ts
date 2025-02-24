import { useQuery } from '@tanstack/react-query'
import { getNotifications } from './api'

export const NOTIFICATION_QUERY_KEY = {
  all: ['notifications'] as const,
}

export const useGetNotifications = () => {
  return useQuery({
    queryKey: NOTIFICATION_QUERY_KEY.all,
    queryFn: () => getNotifications(),
  })
}
