import { UserRestaurantServiceInterface } from "./interfaces/user-restaurant-service.interface";
import { UserRestaurantResponseDto } from "../../dto/user/user-restaurant.dto";
import { RestaurantRepositoryInterface } from "../../repositories/interfaces/restaurant-repository.interface";
import { toUserRestaurantResponseDto } from "../../mappers/user/restaurant.mapper";

export class UserRestaurantService implements UserRestaurantServiceInterface {

    private _restaurantRepository: RestaurantRepositoryInterface;

    constructor(restaurantRepository: RestaurantRepositoryInterface) {
        this._restaurantRepository = restaurantRepository;
    }

    async getAllRestaurants(): Promise<UserRestaurantResponseDto[]> {
        let restaurants = await this._restaurantRepository.findAll();
        restaurants.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        return restaurants.map(toUserRestaurantResponseDto);
    }
    async getRestaurantById(id: number): Promise<UserRestaurantResponseDto> {
        const restaurant = await this._restaurantRepository.findById(id);
        return toUserRestaurantResponseDto(restaurant);
    }
}