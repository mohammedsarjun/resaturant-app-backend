"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRestaurantController = void 0;
const http_status_enum_1 = require("../../enums/http-status.enum");
const response_1 = require("../../utils/response");
const response_message_constants_1 = require("../../constants/response-message.constants");
class AdminRestaurantController {
    constructor(adminRestaurantService) {
        this._adminRestaurantService = adminRestaurantService;
    }
    createRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const restaurantData = req.body;
            const result = yield this._adminRestaurantService.createRestaurant(restaurantData);
            (0, response_1.sendSuccess)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.CREATE_SUCCESS, result, http_status_enum_1.HttpStatus.CREATED);
        });
    }
    getAllRestaurants(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const search = req.query.search || "";
            const result = yield this._adminRestaurantService.getAllRestaurants(page, limit, String(search));
            (0, response_1.sendSuccess)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.FETCH_ALL_SUCCESS, result, http_status_enum_1.HttpStatus.OK);
        });
    }
    getRestaurantById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const result = yield this._adminRestaurantService.getRestaurantById(id);
            (0, response_1.sendSuccess)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.FETCH_SUCCESS, result, http_status_enum_1.HttpStatus.OK);
        });
    }
    updateRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                (0, response_1.sendError)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.INVALID_ID, http_status_enum_1.HttpStatus.BAD_REQUEST);
                return;
            }
            const result = yield this._adminRestaurantService.updateRestaurant(id, req.body);
            (0, response_1.sendSuccess)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.UPDATE_SUCCESS, result, http_status_enum_1.HttpStatus.OK);
        });
    }
    deleteRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                (0, response_1.sendError)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.INVALID_ID, http_status_enum_1.HttpStatus.BAD_REQUEST);
                return;
            }
            const result = yield this._adminRestaurantService.deleteRestaurant(id);
            (0, response_1.sendSuccess)(res, response_message_constants_1.RESPONSE_MESSAGE.ADMIN.RESTAURANT.DELETE_SUCCESS, result, http_status_enum_1.HttpStatus.OK);
        });
    }
}
exports.AdminRestaurantController = AdminRestaurantController;
