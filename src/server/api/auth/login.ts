import { passwordUtils } from "~/server/utils/password.utils";
import {users} from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const res = await drizzleClient.select({password: users.password}).from(users).where(eq(users.email, body.email))
        const { password } = res[0];
        const isValid = await passwordUtils.verify(password, body.password);
        if(isValid){
            return await drizzleClient.select().from(users).where(eq(users.email, body.email));
        } else {
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        throw error;
    }

})