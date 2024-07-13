import { drizzleClient} from "~/server/utils/db";
import {users} from "~/server/db/schema";

export default defineEventHandler(async (event) => {
    return drizzleClient.select().from(users);
})