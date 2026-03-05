import {
    AdminRestaurantResponseDto,
    CreateRestaurantDto,
    UpdateRestaurantDto,
} from "../../../dto/admin/admin-restaurant.dto";

export interface AdminRestaurantServiceInterface {
    createRestaurant(restaurantData: CreateRestaurantDto): Promise<AdminRestaurantResponseDto>;
    getAllRestaurants(): Promise<AdminRestaurantResponseDto[]>;
    getRestaurantById(id: number): Promise<AdminRestaurantResponseDto>;
    updateRestaurant(id: number, data: UpdateRestaurantDto): Promise<AdminRestaurantResponseDto>;
    deleteRestaurant(id: number): Promise<AdminRestaurantResponseDto>;
}