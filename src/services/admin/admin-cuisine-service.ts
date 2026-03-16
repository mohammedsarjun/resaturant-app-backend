import {
    AdminCuisineResponseDto,
    CreateCuisineDto,
    UpdateCuisineDto,
} from "../../dto/admin/admin-cuisine.dto";
import { AdminCuisineServiceInterface } from "./interfaces/admin-cuisine-service.interface";
import { CuisineRepositoryInterface } from "../../repositories/interfaces/cuisine-repository.interface";
import { toAdminCuisineResponseDto, toCreateCuisineDto } from "../../mappers/admin/cuisine.mapper";
import { AppError } from "../../utils/AppError";
import { HttpStatus } from "../../enums/http-status.enum";

export class AdminCuisineService implements AdminCuisineServiceInterface {

    private _cuisineRepository: CuisineRepositoryInterface;

    constructor(cuisineRepository: CuisineRepositoryInterface) {
        this._cuisineRepository = cuisineRepository;
    }

    async createCuisine(cuisineData: CreateCuisineDto): Promise<AdminCuisineResponseDto> {
        try {
            const cuisine = await this._cuisineRepository.create(toCreateCuisineDto(cuisineData));
            return toAdminCuisineResponseDto(cuisine);
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new AppError("Cuisine with this name already exists", HttpStatus.CONFLICT);
            }
            throw new AppError("Failed to create cuisine", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllCuisines(page: number, limit: number, search: string): Promise<{ cuisines: AdminCuisineResponseDto[], totalPages: number }> {
        let { cuisines, totalPages } = await this._cuisineRepository.findAllByFilters(page, limit, search);
        cuisines.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        return {
            cuisines: cuisines.map(toAdminCuisineResponseDto),
            totalPages
        };
    }

    async getCuisineById(id: number): Promise<AdminCuisineResponseDto> {
        const cuisine = await this._cuisineRepository.findById(id);
        if (!cuisine) {
            throw new AppError(`Cuisine with id ${id} not found`, HttpStatus.NOT_FOUND);
        }
        return toAdminCuisineResponseDto(cuisine);
    }

    async updateCuisine(id: number, data: UpdateCuisineDto): Promise<AdminCuisineResponseDto> {
        try {
            const cuisine = await this._cuisineRepository.update(id, data);
            return toAdminCuisineResponseDto(cuisine);
        } catch (error: any) {
            if (error.code === 'P2002') {
                throw new AppError("Cuisine with this name already exists", HttpStatus.CONFLICT);
            }
            throw new AppError("Failed to update cuisine", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCuisine(id: number): Promise<AdminCuisineResponseDto> {
        try {
            const cuisine = await this._cuisineRepository.delete(id);
            return toAdminCuisineResponseDto(cuisine);
        } catch (error: any) {
            throw new AppError("Cuisine not found or couldn't be deleted", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllActiveCuisines(): Promise<AdminCuisineResponseDto[]> {
        const cuisines = await this._cuisineRepository.findAllActive();
        cuisines.sort((a, b) => a.name.localeCompare(b.name));
        return cuisines.map(toAdminCuisineResponseDto);
    }
}
