import {
    AdminRestaurantResponseDto,
    CreateRestaurantDto,
    UpdateRestaurantDto,
} from "../../../dto/admin/admin-restaurant.dto";

export interface AdminRestaurantServiceInterface {
    createRestaurant(restaurantData: CreateRestaurantDto): Promise<AdminRestaurantResponseDto>;
    getAllRestaurants(page: number, limit: number, search: string): Promise<{ restaurants: AdminRestaurantResponseDto[], totalPages: number }>;
    getRestaurantById(id: number): Promise<AdminRestaurantResponseDto>;
    updateRestaurant(id: number, data: UpdateRestaurantDto): Promise<AdminRestaurantResponseDto>;
    deleteRestaurant(id: number): Promise<AdminRestaurantResponseDto>;
}