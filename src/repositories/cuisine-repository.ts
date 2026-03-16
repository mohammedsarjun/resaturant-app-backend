import { Cuisine } from "@prisma/client";
import { CuisineRepositoryInterface } from "./interfaces/cuisine-repository.interface";
import { CreateCuisineDto, UpdateCuisineDto } from "../dto/admin/admin-cuisine.dto";
import { BaseRepository } from "./base-repository";
import { prisma } from "../config/db";

export class CuisineRepository
    extends BaseRepository<Cuisine, CreateCuisineDto, UpdateCuisineDto, number>
    implements CuisineRepositoryInterface {
    constructor() {
        super(prisma.cuisine);
    }

    async create(data: CreateCuisineDto): Promise<Cuisine> {
        return super.create(data);
    }

    async findAllByFilters(page: number, limit: number, search: string): Promise<{ cuisines: Cuisine[], totalPages: number }> {
        const whereClause = {
            OR: [
                { name: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
            ]
        };

        const totalItems = await this.model.count({ where: whereClause });
        const totalPages = Math.ceil(totalItems / limit) || 1;

        const cuisines = await this.model.findMany({
            where: whereClause,
            skip: (page - 1) * limit,
            take: limit,
        });

        return { cuisines, totalPages };
    }

    async findById(id: number): Promise<Cuisine | null> {
        return super.findById(id);
    }

    async update(id: number, data: UpdateCuisineDto): Promise<Cuisine> {
        return super.update(id, data);
    }

    async delete(id: number): Promise<Cuisine> {
        return super.delete(id);
    }

    async findAllActive(): Promise<Cuisine[]> {
        return this.model.findMany({ where: { status: "active" } });
    }
}
