import { Restaurant, Cuisine } from "@prisma/client";
import { UserRestaurantResponseDto } from "../../dto/user/user-restaurant.dto";

export const toUserRestaurantResponseDto = (restaurant: Restaurant & { cuisine?: Cuisine } | null): UserRestaurantResponseDto | null => {
    if (!restaurant) return null;
    return {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        contact: restaurant.contact,
        description: restaurant.description,
        cuisineId: restaurant.cuisineId!,
        cuisine: restaurant.cuisine ? { id: restaurant.cuisine.id, name: restaurant.cuisine.name } : undefined,
        rating: restaurant.rating,
        tables: restaurant.tables,
        status: restaurant.status,
        createdAt: restaurant.createdAt,
        updatedAt: restaurant.updatedAt,
    };
};
