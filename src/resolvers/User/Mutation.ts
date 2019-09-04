import { Context, authorisateRequest } from "../../utils";
import * as jwt  from "jsonwebtoken"
import  * as argon2  from "argon2";

const ARGON2CONFIG = {

}


export const Mutation = {
    createUser: async (what, { user   } , context: Context, info) => {
        let password = await argon2.hash(user.password, ARGON2CONFIG)
        let updatedUser = {...user, password};
        return await context.prisma.createUser(updatedUser)
    },

    updateUser: async (what, { user } , context: Context, info) => {
        return await context.prisma.updateUser(user)
     },

    deleteUser: async (what, { user } , context: Context, info) => {
        return await context.prisma.deleteUser(user).$fragment
     },

    login: async (what, { email, password  } , context: Context, info) => {
        const user = await context.prisma.user({ email })
        if (!user) {
            throw new Error(`No such user found for email: ${email}`)
        }
        try {
            if (await argon2.verify(user.password, password)) {
                user.password = null
                return {
                    token:  jwt.sign({ userId: user.id }, process.env.APP_SECRET),
                    user,
                }
            } else {
                throw new Error(`wrong password`)
            }
          } catch (error) {
            throw error
          }
     },


     
}



