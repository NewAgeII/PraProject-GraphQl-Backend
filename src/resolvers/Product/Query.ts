import { Context } from "../../utils";

export const Query = {
    getProducts: (parent, args, context: Context, info) => {
        return context.prisma.products({skip: args.offset, first: args.limit, where: args.where})
      },
      getProductById: (parent, args, context: Context, info) => {
        return context.prisma.product({id: args.where.id})
      },
}