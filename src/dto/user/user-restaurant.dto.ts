export interface UserRestaurantResponseDto {
  id: number;
  name: string;
  address: string;
  contact: string;
  description: string;
  cuisine: string;
  rating: number;
  tables: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}