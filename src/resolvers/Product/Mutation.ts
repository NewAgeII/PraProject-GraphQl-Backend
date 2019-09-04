import { Context, authorisateRequest } from "../../utils";

export const Mutation = {
    createProduct: async (what, { product } , context: Context, info) => {
        await authorisateRequest(context, "customer", "update")
        
        return await context.prisma.createProduct(product)
    },

    updateProduct: async (what, { product } , context: Context, info) => {
        return await context.prisma.updateProduct(product)
     },

    deleteProduct: async (what, { product } , context: Context, info) => {
        return await context.prisma.deleteProduct(product)
     },
}

