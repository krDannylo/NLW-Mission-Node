import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{ //Parâmetros: Nome da variável: Tipo da variável
    async handle(request: Request, response: Response){
        const { name, email, admin } = request.body; //Destructing 

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin});

        return response.json(user);
    }

}

export { CreateUserController }