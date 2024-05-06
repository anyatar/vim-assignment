"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controller_1 = __importDefault(require("../controllers/api.controller"));
const home_controller_1 = require("../controllers/home.controller");
const router = (0, express_1.Router)();
const controller = new api_controller_1.default();
router.get("/", home_controller_1.welcome);
//router.post("/signup", controller.create);
router.put("/update", controller.update);
router.get("/users", controller.getUsers);
exports.default = router;
//# sourceMappingURL=api.routes.js.map