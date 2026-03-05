import { Restaurant } from "@prisma/client";
import { CreateRestaurantDto, UpdateRestaurantDto } from "../../dto/admin/admin-restaurant.dto";

export interface RestaurantRepositoryInterface {
    create(data: CreateRestaurantDto): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findById(id: number): Promise<Restaurant | null>;
    update(id: number, data: UpdateRestaurantDto): Promise<Restaurant>;
    delete(id: number): Promise<Restaurant>;
}