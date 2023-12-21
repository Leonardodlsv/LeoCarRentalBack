import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export const getBooking = async (req: Request, res: Response) => {
    const { id } = req.params;
    const booking = await prismaClient.booking.findUnique({ where: { id: +id } });
    res.status(200).json(booking);
};

export const getBookings = async (req: Request, res: Response) => {
    const bookings = await prismaClient.booking.findMany();
    res.status(200).json(bookings);
};

export const createBooking = async (req: Request, res: Response) => {
    const body = req.body;
  
    try {
        const bookings = await prismaClient.booking.create({
            data: {
              ...body,
            },
          });
          res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error to create the booking' });
    }
}

export const updateBooking = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      const updatedBooking = await prismaClient.booking.update({
        where: { id: +id },
        data,
      });
      res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json({ error: 'Error to update the booking' });
    }
}

export const deleteBooking = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      await prismaClient.booking.delete({
        where: { id: +id },
      });

      res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error to delete the Booking' });
    }
}