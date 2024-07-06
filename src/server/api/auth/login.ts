import {db} from "~/server/db/db";
import {Prisma} from '@prisma/client'
import { passwordUtils } from "~/server/utils/password.utils";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const res = await db.user.findUnique({
            where: {
                email: body.email,
            },
            select: {
                password: true,
            }
        });
        if(res) {
            const pw = await passwordUtils.verify(res.password, body.password);
            console.log(pw)
        }
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            throw error.message;
        }
        else throw error;
    }

})