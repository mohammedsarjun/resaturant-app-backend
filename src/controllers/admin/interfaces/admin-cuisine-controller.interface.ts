import { Request, Response } from "express";

export interface AdminCuisineControllerInterface {
    createCuisine(req: Request, res: Response): Promise<void>;
    getAllCuisines(req: Request, res: Response): Promise<void>;
    getCuisineById(req: Request, res: Response): Promise<void>;
    updateCuisine(req: Request, res: Response): Promise<void>;
    deleteCuisine(req: Request, res: Response): Promise<void>;
    getAllActiveCuisines(req: Request, res: Response): Promise<void>;
}
