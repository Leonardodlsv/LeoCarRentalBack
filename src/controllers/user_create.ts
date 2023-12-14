
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/signup', async (req: Request, res: Response) => {
    const { email, password_user, first_name, last_name, phone, address, country } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password_user, 10);

        const user = await prisma.user.create({
        data: {
            email,
            password_user: hashedPassword,
            first_name,
            last_name,
            phone,
            address,
            country,
        },
        });

        res.status(201).json({ userCreated: true, user });
    } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
    }
    });

    app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001');
    });
