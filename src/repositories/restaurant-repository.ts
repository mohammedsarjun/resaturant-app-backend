import { Restaurant } from "@prisma/client";
import { RestaurantRepositoryInterface } from "./interfaces/restaurant-repository.interface";
import { CreateRestaurantDto, UpdateRestaurantDto } from "../dto/admin/admin-restaurant.dto";
import { BaseRepository } from "./base-repository";
import { prisma } from "../config/db";

export class RestaurantRepository
    extends BaseRepository<Restaurant, CreateRestaurantDto, UpdateRestaurantDto, number>
    implements RestaurantRepositoryInterface {
    constructor() {
        super(prisma.restaurant);
    }

    async create(data: CreateRestaurantDto): Promise<Restaurant> {
        return super.create(data);
    }

    async findAllByFilters(page: number, limit: number, search: string): Promise<{ restaurants: Restaurant[], totalPages: number }> {
        const whereClause = {
            OR: [
                { name: { contains: search, mode: "insensitive" } },
                { contact: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                { cuisine: { name: { contains: search, mode: "insensitive" } } },
            ]
        };

        const totalItems = await this.model.count({ where: whereClause });
        const totalPages = Math.ceil(totalItems / limit) || 1;

        const restaurants = await this.model.findMany({
            where: whereClause,
            include: { cuisine: true },
            skip: (page - 1) * limit,
            take: limit,
        });

        return { restaurants, totalPages };
    }

    async findById(id: number): Promise<Restaurant | null> {
        return prisma.restaurant.findUnique({ where: { id }, include: { cuisine: true } });
    }

    async update(id: number, data: UpdateRestaurantDto): Promise<Restaurant> {
        return super.update(id, data);
    }

    async delete(id: number): Promise<Restaurant> {
        return super.delete(id);
    }
}