import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    
    const newuser = await prisma.user.create({
        data: {
            first_name: "Carlito",
            last_name: "Cagon",
            email: "thurealmojon@gmail.com",
            address: "Santo Domingo",
            country: "Dominican Republic",
            password_user: "elnepe234",
            phone: "829-275-2896"
        }
        
        
    })

    console.log(newuser);
    
}

main()