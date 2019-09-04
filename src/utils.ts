import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma-client'
import { PubSub } from 'apollo-server-koa';


export const pubSub = new PubSub();

export interface Context {
  prisma: Prisma
  request: any
}

export class AuthError extends Error {
  constructor(message) {
    super(message)
  }
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError("not authorizied")
}


export function getUserIdFromToken(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }
  throw new AuthError("not authorizied")
}


export async function authorisateRequest(ctx: Context, buisnessObj: string, action: string): Promise<boolean> {
    let PermissionWhitelist = true;
    //Check if a Permission for the given buinsessObj exists
    let permissionArray = await ctx.prisma.permission({buisnessObj}).actions({where: {type: action}}).$fragment("fragment ResolvedAction on PermissionAction { type roles users { id } }")
    console.log(permissionArray)
    if(!permissionArray || permissionArray["length"] === 0){
      //Check if the buisness Obj exists
      await ctx.prisma.upsertPermission({where: { buisnessObj }, create : {buisnessObj, actions: {create : [{type: action}]}}, update: {actions: {create: [{type: action}]}}})
      throw new AuthError("Permission created")
    }
    let permission = permissionArray[0]
    //Check if now permissions are set and handle it according to PermissionWhitelist
    if(permission.roles.length === 0 && permission.users.length === 0 && PermissionWhitelist){return true}
    else if(permission.roles.length === 0 && permission.users.length === 0 && !PermissionWhitelist){ throw new AuthError("no permission for this action") } 
    
    let id = getUserIdFromToken(ctx)
    let user = await ctx.prisma.user({ id })
    // TODO needs to be testded with roles
    if(user && (permission.users.filter(item => item.id === user.id).length > 0|| permission.roles.some(r => user.roles.includes(r))) ){
     return true
    }else {
      throw new AuthError("no permission for this action")
    }
}