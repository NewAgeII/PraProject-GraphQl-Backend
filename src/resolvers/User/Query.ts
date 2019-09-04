import { Context } from "../../utils";

export const Query = {
    getUserById: (parent, {id}, context: Context, info) => {
        return context.prisma.user({id})
      },
      getUsers: (parent, args, context: Context, info) => {
        return context.prisma.users({skip: args.offset, first: args.limit, where: args.where})
      },

}