import { FastifyRequest, FastifyReply } from "fastify";
import {ListCarServices} from '../services/ListCarServices'

class ListCarController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listCarServices = new ListCarServices();

        const cars = await listCarServices.execute();

        reply.send(cars);
    }
}

export {ListCarController}