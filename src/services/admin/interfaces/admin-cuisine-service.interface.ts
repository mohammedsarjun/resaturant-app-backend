import { AdminCuisineResponseDto, CreateCuisineDto, UpdateCuisineDto } from "../../../dto/admin/admin-cuisine.dto";

export interface AdminCuisineServiceInterface {
    createCuisine(cuisineData: CreateCuisineDto): Promise<AdminCuisineResponseDto>;
    getAllCuisines(page: number, limit: number, search: string): Promise<{ cuisines: AdminCuisineResponseDto[], totalPages: number }>;
    getCuisineById(id: number): Promise<AdminCuisineResponseDto>;
    updateCuisine(id: number, data: UpdateCuisineDto): Promise<AdminCuisineResponseDto>;
    deleteCuisine(id: number): Promise<AdminCuisineResponseDto>;
    getAllActiveCuisines(): Promise<AdminCuisineResponseDto[]>;
}
