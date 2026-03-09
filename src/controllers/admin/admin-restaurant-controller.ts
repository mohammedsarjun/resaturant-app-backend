import { AdminRestaurantControllerInterface } from "./interfaces/admin-restaurant-controller.interface";
import { AdminRestaurantServiceInterface } from "../../services/admin/interfaces/admin-restaurant-service.interface";
import { Request, Response } from "express";
import { HttpStatus } from "../../enums/http-status.enum";
import { sendSuccess, sendError } from "../../utils/response";
import { RESPONSE_MESSAGE } from "../../constants/response-message.constants";

export class AdminRestaurantController implements AdminRestaurantControllerInterface {

    private _adminRestaurantService: AdminRestaurantServiceInterface;

    constructor(adminRestaurantService: AdminRestaurantServiceInterface) {
        this._adminRestaurantService = adminRestaurantService;
    }

    async createRestaurant(req: Request, res: Response): Promise<void> {
        const restaurantData = req.body;
      
        const result = await this._adminRestaurantService.createRestaurant(restaurantData);
        sendSuccess(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.CREATE_SUCCESS, result, HttpStatus.CREATED);
    }

    async getAllRestaurants(req: Request, res: Response): Promise<void> {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search || "";
        const result = await this._adminRestaurantService.getAllRestaurants(page, limit, String(search));
        sendSuccess(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.FETCH_ALL_SUCCESS, result, HttpStatus.OK);
    }

    async getRestaurantById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const result = await this._adminRestaurantService.getRestaurantById(id);
        sendSuccess(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.FETCH_SUCCESS, result, HttpStatus.OK);
    }

    async updateRestaurant(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            sendError(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.INVALID_ID, HttpStatus.BAD_REQUEST);
            return;
        }
        const result = await this._adminRestaurantService.updateRestaurant(id, req.body);
        sendSuccess(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.UPDATE_SUCCESS, result, HttpStatus.OK);
    }

    async deleteRestaurant(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            sendError(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.INVALID_ID, HttpStatus.BAD_REQUEST);
            return;
        }
        const result = await this._adminRestaurantService.deleteRestaurant(id);
        sendSuccess(res, RESPONSE_MESSAGE.ADMIN.RESTAURANT.DELETE_SUCCESS, result, HttpStatus.OK);
    }
}