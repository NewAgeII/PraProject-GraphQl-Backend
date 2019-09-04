import { Context, pubSub } from "../../utils";
import { ContextualizedQueryLatencyStats } from "apollo-engine-reporting-protobuf";


export const Subscription = {
    mainProject: {
        subscribe: async (parent, args, ctx: Context) => { 
           return ctx.prisma.$subscribe.mainProject({mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
        },
        resolve: async (payload, args, ctx: Context, info) => { 
            if(payload.node) payload.node = await ctx.prisma.mainProject({id: payload.node.id});
            return  payload;
        }
    },

    project: {
        subscribe: async (parent, args, ctx: Context) => { 
            return ctx.prisma.$subscribe.project({mutation_in: ['CREATED', 'UPDATED', 'DELETED']})
         },
         resolve: async (payload, args, ctx: Context, info) => { 
             payload.node = await ctx.prisma.project({id: payload.node.id});
             return  payload;
         }
    }
}