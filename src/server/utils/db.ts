import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "~/server/db/schema";

const client = new pg.Client({
    connectionString: process.env.NUXT_DATABASE_URL,
});

await client.connect();
export  const drizzleClient = drizzle(client, { schema: {...schema}});


