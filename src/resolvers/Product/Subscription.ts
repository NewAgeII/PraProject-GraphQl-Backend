import { Context } from "../../utils";

export const Subscription = {
    newProduct: {
        subscribe: async (parent, args, ctx: Context) => { return ctx.prisma.$subscribe.product({mutation_in: ['CREATED']}).node()},
        resolve: payload => { return payload }
    },
    updatedProduct: {
        subscribe: async (parent, args, ctx: Context) => { return ctx.prisma.$subscribe.product({mutation_in: ['UPDATED']}).node()},
        resolve: payload => { return payload }
    },
    deletedProduct: {
        subscribe: async (parent, args, ctx: Context) => { return ctx.prisma.$subscribe.product({mutation_in: ['DELETED']}).previousValues()},
        resolve: payload => { return payload }
    }

}