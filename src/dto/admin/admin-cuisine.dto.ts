export interface CreateCuisineDto {
    name: string;
    description?: string;
    status?: string;
}

export interface UpdateCuisineDto {
    name?: string;
    description?: string;
    status?: string;
}

export interface AdminCuisineResponseDto {
    id: number;
    name: string;
    description: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
