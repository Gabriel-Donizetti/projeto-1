import { PrismaClient } from "@prisma/client";

export default class CompanyService {
    static create(name: any, state: any, city: any, segment: any, number: any) {
        throw new Error('Method not implemented.');
    }
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
}