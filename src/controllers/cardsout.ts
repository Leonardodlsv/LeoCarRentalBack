import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from "cors"
const app = express();
const prismaClient = new PrismaClient();


app.use(cors({ origin: 'http://localhost:5173' }));
app.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await prismaClient.vehicles.findMany();
        res.json(vehicles);
    } catch (error) {
    res.status(500).json({ error: 'Error to get the vehicles' });
    }
});