import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main() {
    const deluser = await prisma.user.delete ({
        where: {
            id: 1
        }
    })
    console.log(deluser);
    
}
      
main()