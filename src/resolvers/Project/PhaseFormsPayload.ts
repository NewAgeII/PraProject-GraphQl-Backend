import { Context } from "../../utils";


export const PhaseFormsPayload = {
  projectManager: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.phaseFormsPayload({id}).projectManager();
  },
 
}





