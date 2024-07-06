import {db} from "~/server/db/db";
import {Prisma} from '@prisma/client'
import { passwordUtils } from "~/server/utils/password.utils";

export default defineEventHandler(async (event) => {
    const body: Prisma.UserCreateInput = await readBody(event);
    try {
        if(body) body.role = 'USER'
        body.password = await passwordUtils.hash(body.password);
        await db.user.create({
            data: body,
        });
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            throw error.message;
        }
        else throw error;
    }

})