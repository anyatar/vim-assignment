import { Router } from "express";
import apiController from "../controllers/api.controller";
import { welcome } from "../controllers/home.controller";

const router = Router();
const controller = new apiController();

router.get("/", welcome);

//router.post("/signup", controller.create);
router.put("/update", controller.update);
router.get("/users", controller.getUsers);

export default router;
