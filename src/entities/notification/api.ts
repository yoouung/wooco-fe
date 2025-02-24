import { customAxios } from '@/src/shared/axios'
import { NotificationType } from './type'

export const getNotifications = async (): Promise<NotificationType[]> => {
  try {
    const response = await customAxios.get(`/notifications`)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}
