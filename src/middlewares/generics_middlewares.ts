import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { conflictError, unauthorizedError } from '../errors/index';

// export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
//   const authHeader = req.header('Authorization');
//   if (!authHeader) return generateUnauthorizedResponse(res);

//   const token = authHeader.split(' ')[1];
//   if (!token) return generateUnauthorizedResponse(res);

//   try {

//     //aqui

//     return next();
//   } catch (err) {
//     return generateUnauthorizedResponse(res);
//   }
// }


export function parseId(id:string){
    const parsed = Number.parseInt(id)
    if(isNaN(parsed)){
        throw conflictError
    }
    return parsed
}


function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
