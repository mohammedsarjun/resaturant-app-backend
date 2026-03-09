"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_restaurant_controller_1 = require("../controllers/user/user-restaurant-controller");
const user_restaurant_service_1 = require("../services/user/user-restaurant-service");
const restaurant_repository_1 = require("../repositories/restaurant-repository");
const router = express_1.default.Router();
// Dependency injection
const restaurantRepository = new restaurant_repository_1.RestaurantRepository();
const userRestaurantService = new user_restaurant_service_1.UserRestaurantService(restaurantRepository);
const userRestaurantController = new user_restaurant_controller_1.UserRestaurantController(userRestaurantService);
router.get('/restaurants', userRestaurantController.getAllRestaurants.bind(userRestaurantController));
router.get('/restaurants/:id', userRestaurantController.getRestaurantById.bind(userRestaurantController));
exports.default = router;
