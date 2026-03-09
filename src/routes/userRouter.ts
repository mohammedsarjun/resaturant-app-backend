import express from 'express'
import { UserRestaurantController } from '../controllers/user/user-restaurant-controller';
import { UserRestaurantService } from '../services/user/user-restaurant-service';
import { RestaurantRepository } from '../repositories/restaurant-repository';

const router = express.Router();

// Dependency injection
const restaurantRepository = new RestaurantRepository();
const userRestaurantService = new UserRestaurantService(restaurantRepository);
const userRestaurantController = new UserRestaurantController(userRestaurantService);

router.get('/restaurants', userRestaurantController.getAllRestaurants.bind(userRestaurantController));
router.get('/restaurants/:id', userRestaurantController.getRestaurantById.bind(userRestaurantController));

export default router;