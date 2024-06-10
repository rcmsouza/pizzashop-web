import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza shop',
    description: 'Custom restaurant',
    createdAt: new Date(),
    updatedAt: null,
    managerId: 'custom-manager-id',
  })
})
