import { Context } from "../../utils";

export const Subscription = {


    customer: {
        subscribe: async (parent, args, ctx: Context) => { 
            return ctx.prisma.$subscribe.customer({mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
         },
         resolve: async (payload, args, ctx: Context, info) => { 
             if(payload.node) payload.node = await ctx.prisma.customer({id: payload.node.id});
             return  payload;
         }
    },


}