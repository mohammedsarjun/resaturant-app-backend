import { Restaurant } from "@prisma/client";
import { CreateRestaurantDto, UpdateRestaurantDto } from "../../dto/admin/admin-restaurant.dto";

export interface RestaurantRepositoryInterface {
    create(data: CreateRestaurantDto): Promise<Restaurant>;
    findAllByFilters(page: number, limit: number, search: string): Promise<{ restaurants: Restaurant[], totalPages: number }>;
    findById(id: number): Promise<Restaurant | null>;
    update(id: number, data: UpdateRestaurantDto): Promise<Restaurant>;
    delete(id: number): Promise<Restaurant>;
}