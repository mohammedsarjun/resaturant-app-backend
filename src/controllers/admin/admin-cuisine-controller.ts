import { AdminCuisineControllerInterface } from "./interfaces/admin-cuisine-controller.interface";
import { AdminCuisineServiceInterface } from "../../services/admin/interfaces/admin-cuisine-service.interface";
import { Request, Response } from "express";
import { HttpStatus } from "../../enums/http-status.enum";
import { sendSuccess, sendError } from "../../utils/response";

import { RESPONSE_MESSAGE } from "../../constants/response-message.constants";

export class AdminCuisineController implements AdminCuisineControllerInterface {

    private _adminCuisineService: AdminCuisineServiceInterface;

    constructor(adminCuisineService: AdminCuisineServiceInterface) {
        this._adminCuisineService = adminCuisineService;
    }

    async createCuisine(req: Request, res: Response): Promise<void> {
        try {
            const cuisineData = req.body;
            const result = await this._adminCuisineService.createCuisine(cuisineData);
            sendSuccess(res, "Cuisine created successfully", result, HttpStatus.CREATED);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllCuisines(req: Request, res: Response): Promise<void> {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const search = req.query.search || "";
            const result = await this._adminCuisineService.getAllCuisines(page, limit, String(search));
            sendSuccess(res, "Cuisines fetched successfully", result, HttpStatus.OK);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getCuisineById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                sendError(res, "Invalid cuisine ID", HttpStatus.BAD_REQUEST);
                return;
            }
            const result = await this._adminCuisineService.getCuisineById(id);
            sendSuccess(res, "Cuisine fetched successfully", result, HttpStatus.OK);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateCuisine(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                sendError(res, "Invalid cuisine ID", HttpStatus.BAD_REQUEST);
                return;
            }
            const result = await this._adminCuisineService.updateCuisine(id, req.body);
            sendSuccess(res, "Cuisine updated successfully", result, HttpStatus.OK);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCuisine(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                sendError(res, "Invalid cuisine ID", HttpStatus.BAD_REQUEST);
                return;
            }
            const result = await this._adminCuisineService.deleteCuisine(id);
            sendSuccess(res, "Cuisine deleted successfully", result, HttpStatus.OK);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllActiveCuisines(req: Request, res: Response): Promise<void> {
        try {
            const result = await this._adminCuisineService.getAllActiveCuisines();
            sendSuccess(res, "Active cuisines fetched successfully", result, HttpStatus.OK);
        } catch (error: any) {
            sendError(res, error.message, error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
