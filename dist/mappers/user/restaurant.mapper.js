"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserRestaurantResponseDto = void 0;
const toUserRestaurantResponseDto = (restaurant) => {
    return {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact,
        description: restaurant.description,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating,
        tables: restaurant.tables,
        status: restaurant.status,
        createdAt: restaurant.createdAt,
        updatedAt: restaurant.updatedAt,
    };
};
exports.toUserRestaurantResponseDto = toUserRestaurantResponseDto;
