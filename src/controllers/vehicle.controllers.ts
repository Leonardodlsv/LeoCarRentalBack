import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();


export const getVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await prismaClient.vehicles.findUnique({ where: { id: +id } });
  res.status(200).json(vehicle);
};


export const getVehicles = async (req: Request, res: Response) => {
  const vehicles = await prismaClient.vehicles.findMany();
  res.status(200).json(vehicles);
};


export const createVehicle = async (req: Request, res: Response) => {
    const body = req.body;
  
    try {
        const vehicles = await prismaClient.vehicles.create({
            data: {
              ...body,
            },
          });
          res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: 'Error to create the vehicles' });
    }
}

export const updateVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      const updatedVehicle = await prismaClient.vehicles.update({
        where: { id: +id },
        data,
      });
      res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Error to update the vehicles' });
    }
}

export const deleteVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      await prismaClient.vehicles.delete({
        where: { id: +id },
      });

      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error to delete the vehicles' });
    }
}
