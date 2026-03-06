import { RESPONSE_MESSAGE } from "../../constants/response-message.constants";
import { HttpStatus } from "../../enums/http-status.enum";
import { UserRestaurantServiceInterface } from "../../services/user/interfaces/user-restaurant-service.interface";
import { sendError, sendSuccess } from "../../utils/response";
import { UserRestaurantControllerInterface } from "./interafaces/user-restaurant-controller.interface";
import { Request, Response } from "express";


export class UserRestaurantController implements UserRestaurantControllerInterface {

    constructor(private _userRestaurantService: UserRestaurantServiceInterface) {

    }
    async getAllRestaurants(req: Request, res: Response): Promise<void> {
        const result = await this._userRestaurantService.getAllRestaurants();
        sendSuccess(res, RESPONSE_MESSAGE.USER.RESTAURANT.FETCH_ALL_SUCCESS, result, HttpStatus.OK);
    }
    async getRestaurantById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const result = await this._userRestaurantService.getRestaurantById(id);
        sendSuccess(res, RESPONSE_MESSAGE.USER.RESTAURANT.FETCH_SUCCESS, result, HttpStatus.OK);
    }
}