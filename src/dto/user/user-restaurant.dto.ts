export interface UserRestaurantResponseDto {
  id: number;
  name: string;
  address: string;
  contact: string;
  description: string;
  cuisineId: number;
  cuisine?: { id: number; name: string };
  rating: number;
  tables: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
