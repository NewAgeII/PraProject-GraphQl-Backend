import { Context } from "../../utils";

export const Query = {
    getCustomers: (parent, args, context: Context, info) => {
        return context.prisma.customers({skip: args.offset, first: args.limit, where: args.where})
      },

      getCustomerById: (parent, {id}, context: Context, info) => {
        return context.prisma.customer({id})
      },
}