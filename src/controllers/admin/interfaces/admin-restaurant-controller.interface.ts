import { Request, Response } from "express";

export interface AdminRestaurantControllerInterface {
    createRestaurant(req: Request, res: Response): Promise<void>;
    getAllRestaurants(req: Request, res: Response): Promise<void>;
    getRestaurantById(req: Request, res: Response): Promise<void>;
    updateRestaurant(req: Request, res: Response): Promise<void>;
    deleteRestaurant(req: Request, res: Response): Promise<void>;
}