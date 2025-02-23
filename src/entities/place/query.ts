import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query'
import {
  deletePlaceReview,
  getPlace,
  getPlaceReviews,
} from '@/src/entities/place/api'
import { PlaceReviewType, PlaceType } from '@/src/entities/place/type'

export const PLACE_QUERY_KEY = {
  detail: (id: string) => ['place', id] as const,
  reviews: (id: string) => ['place', id, 'reviews'] as const,
}

export const useGetPlace = (id: string): UseQueryResult<PlaceType> => {
  return useQuery({
    queryKey: PLACE_QUERY_KEY.detail(id),
    queryFn: () => getPlace(id),
  })
}

export const useGetPlaceReviews = (
  id: string
): UseQueryResult<PlaceReviewType[]> => {
  return useQuery({
    queryKey: PLACE_QUERY_KEY.reviews(id),
    queryFn: () => getPlaceReviews(id),
  })
}

export const useDeletePlaceReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deletePlaceReview(id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: PLACE_QUERY_KEY.reviews })
    },
  })
}
