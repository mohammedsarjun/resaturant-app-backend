import {
    AdminRestaurantResponseDto,
    CreateRestaurantDto,
    UpdateRestaurantDto,
} from "../../dto/admin/admin-restaurant.dto";
import { AdminRestaurantServiceInterface } from "./interfaces/admin-restaurant-service.interface";
import { RestaurantRepositoryInterface } from "../../repositories/interfaces/restaurant-repository.interface";
import { toAdminRestaurantResponseDto, toCreateRestaurantDto } from "../../mappers/admin/restaurant.mapper";

export class AdminRestaurantService implements AdminRestaurantServiceInterface {

    private _restaurantRepository: RestaurantRepositoryInterface;

    constructor(restaurantRepository: RestaurantRepositoryInterface) {
        this._restaurantRepository = restaurantRepository;
    }

    async createRestaurant(restaurantData: CreateRestaurantDto): Promise<AdminRestaurantResponseDto> {

        const restaurantDto = toCreateRestaurantDto(restaurantData);
        const restaurant = await this._restaurantRepository.create(restaurantDto);
        return toAdminRestaurantResponseDto(restaurant);
    }

    async getAllRestaurants(page: number, limit: number, search: string): Promise<{ restaurants: AdminRestaurantResponseDto[], totalPages: number }> {
        let { restaurants, totalPages } = await this._restaurantRepository.findAllByFilters(page, limit, search);
        restaurants.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        return {
            restaurants: restaurants.map(toAdminRestaurantResponseDto),
            totalPages
        };
    }

    async getRestaurantById(id: number): Promise<AdminRestaurantResponseDto> {
        const restaurant = await this._restaurantRepository.findById(id);
        if (!restaurant) {
            throw new Error(`Restaurant with id ${id} not found`);
        }
        return toAdminRestaurantResponseDto(restaurant);
    }

    async updateRestaurant(id: number, data: UpdateRestaurantDto): Promise<AdminRestaurantResponseDto> {
        const restaurant = await this._restaurantRepository.update(id, data);
        return toAdminRestaurantResponseDto(restaurant);
    }

    async deleteRestaurant(id: number): Promise<AdminRestaurantResponseDto> {
        const restaurant = await this._restaurantRepository.delete(id);
        return toAdminRestaurantResponseDto(restaurant);
    }
}