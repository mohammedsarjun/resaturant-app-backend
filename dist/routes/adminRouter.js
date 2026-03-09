"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_repository_1 = require("../repositories/restaurant-repository");
const admin_restaurant_service_1 = require("../services/admin/admin-restaurant-service");
const admin_restaurant_controller_1 = require("../controllers/admin/admin-restaurant-controller");
const router = express_1.default.Router();
// Dependency injection
const restaurantRepository = new restaurant_repository_1.RestaurantRepository();
const adminRestaurantService = new admin_restaurant_service_1.AdminRestaurantService(restaurantRepository);
const adminRestaurantController = new admin_restaurant_controller_1.AdminRestaurantController(adminRestaurantService);
router.post("/restaurants", adminRestaurantController.createRestaurant.bind(adminRestaurantController));
router.get("/restaurants", adminRestaurantController.getAllRestaurants.bind(adminRestaurantController));
router.get("/restaurants/:id", adminRestaurantController.getRestaurantById.bind(adminRestaurantController));
router.put("/restaurants/:id", adminRestaurantController.updateRestaurant.bind(adminRestaurantController));
router.delete("/restaurants/:id", adminRestaurantController.deleteRestaurant.bind(adminRestaurantController));
exports.default = router;
