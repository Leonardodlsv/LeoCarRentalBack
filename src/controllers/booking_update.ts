import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const bookingupdate = await prisma.booking.update({
        where: {
            id: 5
        },
        data: {
            airline: "Jetblue",
            date_in: "1/03/2024",
            date_out: "6/03/2024",
            hour_in: "12:00AM",
            hour_out: "6:35PM",
            no_flight: "B7852"
        }
    })
    console.log(bookingupdate);
    
}
main()