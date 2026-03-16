import { Cuisine } from "@prisma/client";
import { AdminCuisineResponseDto, CreateCuisineDto } from "../../dto/admin/admin-cuisine.dto";

export const toAdminCuisineResponseDto = (cuisine: Cuisine): AdminCuisineResponseDto => {
    return {
        id: cuisine.id,
        name: cuisine.name,
        description: cuisine.description,
        status: cuisine.status,
        createdAt: cuisine.createdAt,
        updatedAt: cuisine.updatedAt,
    };
};

export const toCreateCuisineDto = (cuisine: CreateCuisineDto): CreateCuisineDto => {
    return { ...cuisine };
};
