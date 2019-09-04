import { Context } from "../../utils";

export const Branch = {
  address: async ( {id}, args, ctx: Context, info) => {
    return ctx.prisma.branch({id}).address()
  },
  contacts: async ( {id}, args, ctx: Context, info) => {
    return ctx.prisma.branch({id}).contacts()
  },
  buisness: async ( {id}, args, ctx: Context, info) => {
    return ctx.prisma.branch({id}).buisness()
  },
  products: async ( {id}, args, ctx: Context, info) => {
    return ctx.prisma.branch({id}).products()
  }
}
