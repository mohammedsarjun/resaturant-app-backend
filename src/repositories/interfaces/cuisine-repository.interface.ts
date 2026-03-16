import { Cuisine } from "@prisma/client";
import { CreateCuisineDto, UpdateCuisineDto } from "../../dto/admin/admin-cuisine.dto";

export interface CuisineRepositoryInterface {
    create(data: CreateCuisineDto): Promise<Cuisine>;
    findAllByFilters(page: number, limit: number, search: string): Promise<{ cuisines: Cuisine[], totalPages: number }>;
    findById(id: number): Promise<Cuisine | null>;
    update(id: number, data: UpdateCuisineDto): Promise<Cuisine>;
    delete(id: number): Promise<Cuisine>;
    findAllActive(): Promise<Cuisine[]>;
}
