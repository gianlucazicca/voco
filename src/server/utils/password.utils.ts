import * as argon2 from "argon2";
export const passwordUtils = {
    hash:  async (plain: string) => {
        try {
            return await argon2.hash(plain);
        } catch (err) {
            throw err;
        }
    },
    verify: async (hash: string, plain: string) => {
        try {
            return await argon2.verify(hash, plain);
        } catch (err) {
            throw err;
        }
    }
}