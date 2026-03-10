
import { Restaurant } from "@prisma/client";
import { UserRestaurantResponseDto } from "../../dto/user/user-restaurant.dto";

export const toUserRestaurantResponseDto = (restaurant: Restaurant | null): UserRestaurantResponseDto | null => {
    if (!restaurant) return null;
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