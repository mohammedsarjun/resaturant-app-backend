import { UserRestaurantResponseDto } from "../../../dto/user/user-restaurant.dto";

export interface UserRestaurantServiceInterface {
    getAllRestaurants(): Promise<UserRestaurantResponseDto[]>;
    getRestaurantById(id: number): Promise<UserRestaurantResponseDto>;
}