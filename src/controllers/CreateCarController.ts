import { FastifyRequest, FastifyReply } from "fastify";
import {CreateCarService} from '../services/CreateCarService'

class CreateCarController{
    async handle(request:FastifyRequest, reply:FastifyReply){

        const {brand, model, mileage, year} =request.body as {
            brand: string; 
            model: string; 
            mileage: number; 
            year: number; 
        };


        const carService = new CreateCarService()
        const car = await carService.execute({brand, model, mileage, year});

        reply.send(car)
    }
}

export{CreateCarController};