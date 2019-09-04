import { Context } from "../../utils";


export const ProjectManager = {
  manager: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.projectManager({id}).manager()
  },
 
}


