import { Context } from "../../utils";

export const Subscription = {
    user: {
        subscribe: async (parent, args, ctx: Context) => { 
           return ctx.prisma.$subscribe.user({mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
        },
        resolve: async (payload, args, ctx: Context, info) => { 
            if(payload.node) payload.node = await ctx.prisma.user({id: payload.node.id});
            return  payload;
        }
    },
}