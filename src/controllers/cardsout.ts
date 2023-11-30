import express from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();
const prisma = new PrismaClient();
import cors from "cors"

app.use(cors({ origin: 'http://localhost:5173' }));
app.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await prisma.vehicles.findMany();
        res.json(vehicles);
    } catch (error) {
    res.status(500).json({ error: 'Error to get the vehicles' });
    }
});


app.listen(3001, () => {
    console.log('Server start on 3001');
});
