import {Request, Response} from "express";


class AuthenticateUserController {
  async handle (request: Request, response: Response) {
    
    const service = new AuthenticateUserService;
    //service.execute()
  }
}

export {AuthenticateUserController}