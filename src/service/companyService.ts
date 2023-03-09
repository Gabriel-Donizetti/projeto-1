import { PrismaClient } from "@prisma/client";

export default class CompanyService {
    
    prisma: PrismaClient

    constructor () {
        this.prisma = new PrismaClient()
    }

    async create(name: string,state: string ,city: string ,segment: string, number: string){
        const company = await this.prisma.company.create({
            data:{
                city,
                name,
                number,
                segment,
                state
            }
        })
        return company
    }

    async findBySegment(segment: string){
        const segments = await this.prisma.company.findMany({
            where:{
                segment
            }
        })
        return segments
    }



}