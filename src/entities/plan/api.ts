import { customAxios } from '@/src/shared/axios'
import { PlanPayloadType } from '@/src/entities/plan/type'

export const getPlans = async () => {
  try {
    const response = await customAxios.get('/plans')
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getPlan = async (id: string) => {
  try {
    const response = await customAxios.get(`/plans/${id}`)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const postPlan = async (payload: PlanPayloadType) => {
  try {
    const response = await customAxios.post('/plans', payload)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updatePlan = async (id: string, payload: PlanPayloadType) => {
  try {
    const response = await customAxios.patch(`/plans/${id}`, payload)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deletePlan = async (id: string) => {
  try {
    const response = await customAxios.delete(`/plans/${id}`)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}
