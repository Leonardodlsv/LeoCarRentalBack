import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main (){
    const userupdate = await prisma.user.update ({
        where: {
            email: "cameronr@gmail.com"
        },
        data: {
            first_name: "Riam",
            last_name: "Camaron",
            password_user: "Camarones de mar"
        }
    })

    console.log(userupdate);
    
}
    
main()
