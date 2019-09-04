import { Context, authorisateRequest } from "../../utils";

export const Mutation = {
    createCustomer: async (what, { customer } , context: Context, info) => {
        await authorisateRequest(context, "customer", "update")
        
        return await context.prisma.createCustomer(customer)
    },

    updateCustomer: async (what, { customer } , context: Context, info) => {
        return await context.prisma.updateCustomer(customer)
     },

    deleteCustomer: async (what, { customer } , context: Context, info) => {
        return await context.prisma.deleteCustomer(customer)
     },
}


