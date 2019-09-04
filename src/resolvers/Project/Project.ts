import { Context } from "../../utils";


export const Project = {
  projectManager: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.project({id}).projectManager()
  },
  product: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.project({id}).product()
  },
  phases:  async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.project({id}).phases()
  },
  mainProject: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.project({id}).mainProject()
  }
}



