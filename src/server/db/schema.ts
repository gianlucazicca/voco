import { serial, text, pgTable, pgSchema, uuid, timestamp } from 'drizzle-orm/pg-core';


export const authSchema = pgSchema('auth');
export const roles = authSchema.enum('roles', [ 'USER', 'ADMIN' ]);
export const users = authSchema.table('users', {
    id: uuid('id').defaultRandom().primaryKey().notNull().unique(),
    name: text('name'),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    role: roles('roles').default('USER').notNull(),
    created_at: timestamp('created_at', {mode: 'string'}).defaultNow().notNull(),
    updated_at: timestamp('updated_at', {mode: 'string'}).$onUpdate(()=> new Date().toISOString())
});