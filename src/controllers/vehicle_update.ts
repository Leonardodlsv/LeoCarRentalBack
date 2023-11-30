import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main () {
    const vehicleupdate = await prisma.vehicles.update ({
        where: {
            id: 1
        },
        data: {
            brand: "Toyota",
            model: "Land Cruiser 4x4",
            color: "Gray",
            seats: 5,
            extra: "Apple Car Play",
            price: 250
        }
    })

    console.log(vehicleupdate);
    
}

main()