import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const newvehicle = await prisma.vehicles.create ({
        data: {
            brand: "Toyota",
            model: "Land Cruiser",
            color: "White",
            year: 2018,
            seats: 5,
            extra: "Android Play",
            price: 230,
            image: "",
            gas: "",
            userid: {
                connect: {
                    id: 3
                }
            },
            category: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log(newvehicle);
    
}

main()