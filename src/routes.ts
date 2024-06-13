import fastify,{ FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateCarController } from "./controllers/CreateCarController";
import {ListCarController} from './controllers/ListCarController'


export async function routes(Fastify:FastifyInstance, options:FastifyPluginOptions) {
    
    Fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok:true}
    })

    Fastify.post("/car", async (request: FastifyRequest, reply:FastifyReply) => {
        return new CreateCarController().handle(request,reply)
    })

    Fastify.get("/cars", async (request: FastifyRequest, reply:FastifyReply) => {
        return new ListCarController().handle(request,reply)
    })
}