import { Context } from "../../utils";


export const PhasePayload = {
  tasks: async ({id}, args, ctx: Context, info) => {
    return ctx.prisma.phasePayload({id}).tasks();
  },
 
}



