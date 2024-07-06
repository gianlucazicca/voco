import {useHelloWorld} from "~/composables/useHelloWorld";
import {db} from "~/server/db/db";
export default defineEventHandler(async (event) => {
    const allUsers = await db.users.findMany()
    console.log(allUsers)
})