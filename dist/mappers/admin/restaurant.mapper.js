"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCreateRestaurantDto = exports.toAdminRestaurantResponseDto = void 0;
const toAdminRestaurantResponseDto = (restaurant) => {
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
exports.toAdminRestaurantResponseDto = toAdminRestaurantResponseDto;
const toCreateRestaurantDto = (restaurant) => {
    return {
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact,
        description: restaurant.description,
        cuisine: restaurant.cuisine,
        rating: Number(restaurant.rating),
        tables: Number(restaurant.tables),
        status: restaurant.status,
    };
};
exports.toCreateRestaurantDto = toCreateRestaurantDto;
