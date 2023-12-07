import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from "cors"
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password_user: password,
      },
    });


    if (user !== null) {
      res.status(200).json({ uservalid: true });
    } else {
      res.status(200).json({ uservalid: false });
    }
  } catch (error) {
    console.error('Error to verificate user:', error);
    res.status(500).json({ error: 'Error to verificate user' });
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
