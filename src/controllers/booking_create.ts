import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main () {
    const newbooking = await prisma.booking.create ({
        data: {
            airline: "Delta Airlines",
            airport: "STI Airport",
            date_in: "29/02/2023",
            date_out: "4/02/2023",
            hour_in: "10:00 AM",
            hour_out: "2:25 PM",
            no_flight: "A2755",
            User: {
                connect: {
                    id: 3
                }
            },
            vehicles: {
                connect: {
                    id: 2
                }
            }

        }
    })
    console.log(newbooking);
    
}

main()