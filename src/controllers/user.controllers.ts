import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import  bcrypt  from "bcrypt";

const prismaClient = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await prismaClient.user.findMany();
  res.status(200).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prismaClient.user.findUnique({ where: { id: +id } });
  res.status(200).json(user);
};

export const postUsers = async (req: Request, res: Response) => {
  const body = req.body;
  const { password_user } = body;
  const password = await bcrypt.hashSync(password_user, 10);
  const user = await prismaClient.user.create({
    data: {
      ...body,
      password_user: password,
    },
  });
  res.status(200).json(user);
};

export const patchUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  if (data.password_user) {
	const password = await bcrypt.hashSync(data.password_user, 10);
	data.password_user = password;
  }
  const user = await prismaClient.user.update({
	where: {id: +id},
    data,
  });
  res.status(200).json(user);
};

export const deleteUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prismaClient.user.delete({ where: { id: +id } });
  res.status(200).json(user);
};

