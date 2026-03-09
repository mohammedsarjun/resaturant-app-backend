import { UserRestaurantServiceInterface } from "./interfaces/user-restaurant-service.interface";
import { UserRestaurantResponseDto } from "../../dto/user/user-restaurant.dto";
import { RestaurantRepositoryInterface } from "../../repositories/interfaces/restaurant-repository.interface";
import { toUserRestaurantResponseDto } from "../../mappers/user/restaurant.mapper";

export class UserRestaurantService implements UserRestaurantServiceInterface {

    private _restaurantRepository: RestaurantRepositoryInterface;

    constructor(restaurantRepository: RestaurantRepositoryInterface) {
        this._restaurantRepository = restaurantRepository;
    }

    async getAllRestaurants(page: number, limit: number, search: string): Promise<{ restaurants: UserRestaurantResponseDto[], totalPages: number }> {
        let { restaurants, totalPages } = await this._restaurantRepository.findAllByFilters(page, limit, search);
        restaurants.sort((a: any, b: any) => b.createdAt.getTime() - a.createdAt.getTime());
        return {
            restaurants: restaurants.map(toUserRestaurantResponseDto),
            totalPages
        };
    }
    async getRestaurantById(id: number): Promise<UserRestaurantResponseDto> {
        const restaurant = await this._restaurantRepository.findById(id);
        return toUserRestaurantResponseDto(restaurant);
    }
}