import { Router } from "express";
import { createVehicle, deleteVehicle, getVehicle, getVehicles, updateVehicle } from "../controllers/vehicle.controllers";

const vehicleRouter = Router();

vehicleRouter.get("/", getVehicles);
vehicleRouter.get("/:id", getVehicle);
vehicleRouter.post("/", createVehicle);
vehicleRouter.patch("/:id", updateVehicle);
vehicleRouter.delete("/:id", deleteVehicle);

export default vehicleRouter;