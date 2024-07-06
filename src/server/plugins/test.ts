import {db} from "~/server/db/db";

export default defineNitroPlugin(async (nitroApp) => {
    try {
        console.log('connecting...')
        await db.$connect();
        console.log('db connected')
    } catch (e) {
        throw e;
    }
    nitroApp.hooks.hook('close', async ()=>{
        try {
            await db.$disconnect();
            console.log('db disconnected')
        } catch (e) {
            throw new Error(`error while disconnecting from db : ${e}`)
        }

    })
})