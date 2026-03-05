import express from "express";
import { RestaurantRepository } from "../repositories/restaurant-repository";
import { AdminRestaurantService } from "../services/admin/admin-restaurant-service";
import { AdminRestaurantController } from "../controllers/admin/admin-restaurant-controller";

const router = express.Router();

// Dependency injection
const restaurantRepository = new RestaurantRepository();
const adminRestaurantService = new AdminRestaurantService(restaurantRepository);
const adminRestaurantController = new AdminRestaurantController(adminRestaurantService);

router.post("/restaurants", adminRestaurantController.createRestaurant.bind(adminRestaurantController));
router.get("/restaurants", adminRestaurantController.getAllRestaurants.bind(adminRestaurantController));
router.get("/restaurants/:id", adminRestaurantController.getRestaurantById.bind(adminRestaurantController));
router.put("/restaurants/:id", adminRestaurantController.updateRestaurant.bind(adminRestaurantController));
router.delete("/restaurants/:id", adminRestaurantController.deleteRestaurant.bind(adminRestaurantController));

export default router;