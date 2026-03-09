"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRestaurantService = void 0;
const restaurant_mapper_1 = require("../../mappers/admin/restaurant.mapper");
class AdminRestaurantService {
    constructor(restaurantRepository) {
        this._restaurantRepository = restaurantRepository;
    }
    createRestaurant(restaurantData) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantDto = (0, restaurant_mapper_1.toCreateRestaurantDto)(restaurantData);
            const restaurant = yield this._restaurantRepository.create(restaurantDto);
            return (0, restaurant_mapper_1.toAdminRestaurantResponseDto)(restaurant);
        });
    }
    getAllRestaurants(page, limit, search) {
        return __awaiter(this, void 0, void 0, function* () {
            let { restaurants, totalPages } = yield this._restaurantRepository.findAllByFilters(page, limit, search);
            restaurants.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            return {
                restaurants: restaurants.map(restaurant_mapper_1.toAdminRestaurantResponseDto),
                totalPages
            };
        });
    }
    getRestaurantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield this._restaurantRepository.findById(id);
            if (!restaurant) {
                throw new Error(`Restaurant with id ${id} not found`);
            }
            return (0, restaurant_mapper_1.toAdminRestaurantResponseDto)(restaurant);
        });
    }
    updateRestaurant(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield this._restaurantRepository.update(id, data);
            return (0, restaurant_mapper_1.toAdminRestaurantResponseDto)(restaurant);
        });
    }
    deleteRestaurant(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield this._restaurantRepository.delete(id);
            return (0, restaurant_mapper_1.toAdminRestaurantResponseDto)(restaurant);
        });
    }
}
exports.AdminRestaurantService = AdminRestaurantService;
