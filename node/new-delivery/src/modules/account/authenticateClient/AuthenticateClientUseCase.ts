import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}
export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Password invalid!");
    }

    const token = sign({ username }, "cc03e747a6afbbcbf8be7668acfebee5", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token;
  }
}