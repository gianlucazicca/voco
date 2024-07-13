import { passwordUtils } from "~/server/utils/password.utils";
import {users} from "~/server/db/schema";


export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        if(body) {
            body.password = await passwordUtils.hash(body.password);
            const res = await drizzleClient.insert(users).values(body).returning();
            console.log(res)
        }
    } catch (error) {
        throw error;
    }

})