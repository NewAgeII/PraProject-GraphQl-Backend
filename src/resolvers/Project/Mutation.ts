import { Context, authorisateRequest } from "../../utils";

export const Mutation = {
    createProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.createProject(project)
    },

    updateProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.updateProject(project)
    },

    deleteProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.deleteProject(project)
    },
    createMainProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.createMainProject(project)
    },

    updateMainProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.updateMainProject(project)
    },

    deleteMainProject: async (what, { project } , context: Context, info) => {
        return await context.prisma.deleteMainProject(project)
    },
    
}


