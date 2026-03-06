import { Request, Response } from "express";

export interface UserRestaurantControllerInterface {
    getAllRestaurants(req: Request, res: Response): Promise<void>;
    getRestaurantById(req: Request, res: Response): Promise<void>;
}