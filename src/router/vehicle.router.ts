import { Router } from "express";
import { createVehicle, deleteVehicle, getVehicle, getVehicles, updateVehicle } from "../controllers/vehicle.controllers";
import userRouter from "./user.router";

const vehicleRouter = Router();

userRouter.get("/", getVehicles);
userRouter.get("/:id", getVehicle);
userRouter.post("/", createVehicle);
userRouter.patch("/:id", updateVehicle);
userRouter.delete("/:id", deleteVehicle);

export default vehicleRouter;