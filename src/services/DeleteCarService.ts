import { error } from "console";
import prismaClient from "../prisma";

interface DeleteCarProps{
    id:string;
}

class DeleteCarService{
    async execute({id}: DeleteCarProps){

        if(id){
            throw new Error("Solicitação Invalida.")
        }

        const findCar = await prismaClient.car.findFirst({
            where:{
                id: id
            }
        })

        if(!findCar){
            throw new Error("Carro não existe!")
        }

        await prismaClient.car.delete({
            where:{
                id: findCar.id
            }
        })

        return{message: "Deletado com suscesso"}

    }
}