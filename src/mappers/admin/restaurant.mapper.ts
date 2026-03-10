import { Restaurant } from "@prisma/client";
import { AdminRestaurantResponseDto, CreateRestaurantDto } from "../../dto/admin/admin-restaurant.dto";

export const  toAdminRestaurantResponseDto = (restaurant: Restaurant): AdminRestaurantResponseDto => {

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

export const toCreateRestaurantDto = (restaurant: CreateRestaurantDto): CreateRestaurantDto => {

    return { ...restaurant,rating:Number(restaurant.rating),tables:Number(restaurant.tables) };
};