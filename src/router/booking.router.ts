import { Router } from "express";
import { deleteBooking, getBooking, getBookings, updateBooking, createBooking } from "../controllers/booking.controllers";

const bookingRouter = Router();

bookingRouter.get("/admin/getbookings", getBookings);
bookingRouter.get("/consult/:id", getBooking);
bookingRouter.post("/create", createBooking);
bookingRouter.patch("/update", updateBooking);
bookingRouter.delete("/delete", deleteBooking);

export default bookingRouter;