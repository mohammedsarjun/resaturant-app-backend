export interface UserRestaurantResponseDto {
  id: number;
  name: string;
  address: string;
  contact: string;
  description: string;
  cuisineId: number;
  rating: number;
  tables: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}