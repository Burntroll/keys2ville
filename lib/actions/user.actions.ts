"use server";

import { CreateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectedToDatabase } from "../database";
import User from "../database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectedToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
