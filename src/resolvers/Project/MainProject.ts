import { Context } from "../../utils";

export const MainProject = {
  customer: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.mainProject({id}).customer();
  },
  projectManager: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.mainProject({id}).projectManager();
  },
  projects: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.mainProject({id}).projects();
  },
  phases: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.mainProject({id}).phases();
  },
}