import prismaClient from "../prisma";

interface CreateCarProps{
    brand:string;
    model:string;
    mileage:number;
    year:number;
}

class CreateCarService{
    async execute({brand, model, mileage, year}: CreateCarProps){

        if(!brand || !model || mileage === undefined || year === undefined){
            throw new Error("Preencha todos os campos")
        }


        const car = await prismaClient.car.create({
            data:{
                brand,
                model,
                mileage,
                year,
            }
        })

        return car
    }
}

export {CreateCarService}