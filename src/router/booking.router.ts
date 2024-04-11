import { Router } from "express";
import { deleteBooking, getBooking, getBookings, updateBooking, createBooking } from "../controllers/booking.controllers";

const bookingRouter = Router();

bookingRouter.get("/admin/getbookings", getBookings);
bookingRouter.get("/consult/:id_passport", getBooking);
bookingRouter.post("/create", createBooking);
bookingRouter.patch("/update/:id_passport", updateBooking);
bookingRouter.delete("/delete/:id_passport", deleteBooking);

export default bookingRouter;