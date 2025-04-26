"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const uniqid_1 = __importDefault(require("uniqid"));
class ShopService {
    async getShop() {
        try {
            const uid = (0, uniqid_1.default)();
            let shop = {
                uid: uid,
                name: "Shop web",
                email: "Shop@mail.com"
            };
            return shop;
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
}
exports.ShopService = ShopService;
