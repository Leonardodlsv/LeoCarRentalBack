import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const bookingdelete = await prisma.booking.delete ({
        where: {
            id: 4
        }
    })
    console.log(bookingdelete);
    
}

main()