import express from "express";
import { RestaurantRepository } from "../repositories/restaurant-repository";
import { AdminRestaurantService } from "../services/admin/admin-restaurant-service";
import { AdminRestaurantController } from "../controllers/admin/admin-restaurant-controller";

import { CuisineRepository } from "../repositories/cuisine-repository";
import { AdminCuisineService } from "../services/admin/admin-cuisine-service";
import { AdminCuisineController } from "../controllers/admin/admin-cuisine-controller";

const router = express.Router();

// Dependency injection
const restaurantRepository = new RestaurantRepository();
const adminRestaurantService = new AdminRestaurantService(restaurantRepository);
const adminRestaurantController = new AdminRestaurantController(adminRestaurantService);

const cuisineRepository = new CuisineRepository();
const adminCuisineService = new AdminCuisineService(cuisineRepository);
const adminCuisineController = new AdminCuisineController(adminCuisineService);

router.post("/restaurants", adminRestaurantController.createRestaurant.bind(adminRestaurantController));
router.get("/restaurants", adminRestaurantController.getAllRestaurants.bind(adminRestaurantController));
router.get("/restaurants/:id", adminRestaurantController.getRestaurantById.bind(adminRestaurantController));
router.put("/restaurants/:id", adminRestaurantController.updateRestaurant.bind(adminRestaurantController));
router.delete("/restaurants/:id", adminRestaurantController.deleteRestaurant.bind(adminRestaurantController));

router.post("/cuisines", adminCuisineController.createCuisine.bind(adminCuisineController));
router.get("/cuisines", adminCuisineController.getAllCuisines.bind(adminCuisineController));
router.get("/cuisines/active", adminCuisineController.getAllActiveCuisines.bind(adminCuisineController));
router.get("/cuisines/:id", adminCuisineController.getCuisineById.bind(adminCuisineController));
router.put("/cuisines/:id", adminCuisineController.updateCuisine.bind(adminCuisineController));
router.delete("/cuisines/:id", adminCuisineController.deleteCuisine.bind(adminCuisineController));

export default router;