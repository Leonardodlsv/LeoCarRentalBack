import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main () {
    const vehicledelete = await prisma.vehicles.delete({
        where: {
            id: 2
        }
    })

    console.log(vehicledelete);
    
}

main()