import { Router } from "express";
import { deleteBooking, getBooking, getBookings, updateBooking, createBooking } from "../controllers/booking.controllers";

const bookingRouter = Router();

bookingRouter.get("/", getBookings);
bookingRouter.get("/:id", getBooking);
bookingRouter.post("/create", createBooking);
bookingRouter.patch("/:id", updateBooking);
bookingRouter.delete("/:id", deleteBooking);

export default bookingRouter;