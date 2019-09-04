import { Context } from "../../utils";

export const Query = {
    getProjects: (parent, args, context: Context, info) => {
        return context.prisma.projects({skip: args.offset, first: args.limit, where: args.where})
      },
    getMainProjects: (parent, args, context: Context, info) => {
      return context.prisma.mainProjects({skip: args.offset, first: args.limit, where: args.where})
    },
    getMainProjectById: (parent, {id}, context: Context, info) => {
      return context.prisma.mainProject({id})
    }
}



