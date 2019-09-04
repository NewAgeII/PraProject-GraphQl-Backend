import { Context } from "../../utils";


export const MainProjectPhases = {
  salesphase: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.mainProjectPhases({id}).salesphase()
  },
 
}



