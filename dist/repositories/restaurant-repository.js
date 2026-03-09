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
exports.RestaurantRepository = void 0;
const base_repository_1 = require("./base-repository");
const db_1 = require("../config/db");
class RestaurantRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(db_1.prisma.restaurant);
    }
    create(data) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, data);
        });
    }
    findAllByFilters(page, limit, search) {
        return __awaiter(this, void 0, void 0, function* () {
            const whereClause = {
                OR: [
                    { name: { contains: search, mode: "insensitive" } },
                    { cuisine: { contains: search, mode: "insensitive" } },
                    { contact: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } },
                ]
            };
            const totalItems = yield this.model.count({ where: whereClause });
            const totalPages = Math.ceil(totalItems / limit) || 1;
            const restaurants = yield this.model.findMany({
                where: whereClause,
                skip: (page - 1) * limit,
                take: limit,
            });
            return { restaurants, totalPages };
        });
    }
    findById(id) {
        const _super = Object.create(null, {
            findById: { get: () => super.findById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.findById.call(this, id);
        });
    }
    update(id, data) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.update.call(this, id, data);
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.delete.call(this, id);
        });
    }
}
exports.RestaurantRepository = RestaurantRepository;
