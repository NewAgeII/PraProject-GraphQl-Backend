import { Context } from "../../utils";


export const Customer = {
  branch: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.customer({id}).branch()
  },
  projectManager: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.customer({id}).projectManager()
  },
}
