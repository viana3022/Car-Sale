import prismaClient from "../prisma";

class ListCarServices{
    async execute() {
        

        const cars = await prismaClient.car.findMany()

        return cars;
    }
}

export {ListCarServices}