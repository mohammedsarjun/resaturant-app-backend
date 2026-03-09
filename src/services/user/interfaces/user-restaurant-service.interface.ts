import { UserRestaurantResponseDto } from "../../../dto/user/user-restaurant.dto";

export interface UserRestaurantServiceInterface {
    getAllRestaurants(page: number, limit: number, search: string): Promise<{ restaurants: UserRestaurantResponseDto[], totalPages: number }>;
    getRestaurantById(id: number): Promise<UserRestaurantResponseDto>;
}