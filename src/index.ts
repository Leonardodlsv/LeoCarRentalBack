import dotenv from "dotenv"
dotenv.config ({path: `${__dirname}/../.env`})

import express, { Request, Response } from "express";
import morgan from "morgan"
import cors from "cors"

const app = express()
const PORT = process.env.PORT;

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use("/", (req: Request, res: Response) => {
    res.json({"Message": "The app is working."})
})

app.listen (PORT, () => {
    console.log(`The app is running on: http://localhost:${PORT}.`);
    
})