import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

interface BookingRequestBody {
  email: string;
  full_name: string;
  country: string;
  id_passport: string;
  phone_number: string;
  airport: string;
  airline: string;
  no_flight: string;
  date_in: string;
  hour_in: string;
  date_out: string;
  hour_out: string;
  id_vehicles: any;
}


export const getBooking = async (req: Request, res: Response) => {
  try {
    const  id_passport  = req.params.id_passport;
    const booking = await prismaClient.booking.findUnique({
        where: { id_passport: String(id_passport) },
        include: { vehicles: true }
    });
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener la reserva.' });
  }
};

export const getBookings = async (req: Request, res: Response) => {
    const booking = await prismaClient.booking.findMany();
    res.status(200).json(booking);
};

export const createBooking = async (req: Request<{}, {}, BookingRequestBody>, res: Response) => {
    const body = req.body;
  
    try {
      
        const booking = await prismaClient.booking.create ({
          
            data: {
              email: body.email, 
              full_name: body.full_name,
              country: body.country,
              id_passport: body.id_passport,
              phone_number: body.phone_number,
              airport: body.airport,
              airline: body.airline,
              no_flight: body.no_flight,
              date_in: body.date_in,
              hour_in: body.hour_in ,
              date_out: body.date_out,
              hour_out: body.hour_out,
              id_vehicles: body.id_vehicles,
            },
          });
          res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Error to create the booking' });
    }
}

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const id_passport = req.params.id_passport;
    const dataToUpdate = req.body;

    const updatedBooking = await prismaClient.booking.update({
      where: { id_passport: String(id_passport) },
      data: dataToUpdate,
    });

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Error to update the Booking' });
  }
};



export const deleteBooking = async (req: Request, res: Response) => {
  
    try {
      const id_passport = req.params.id_passport;
      await prismaClient.booking.delete({
        where: { id_passport: String(id_passport) },
      });

      res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error to delete the Booking' });
    }
}