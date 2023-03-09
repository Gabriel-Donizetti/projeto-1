import { PrismaClient } from "@prisma/client";
import { CompanyDto } from "src/interface/company";

export default class companyRepository {
    
    prisma: PrismaClient

    constructor () {
        this.prisma = new PrismaClient()
    }

    async findCompanyByCnpj(comapanyDto: CompanyDto) {
        const company = await this.prisma.company.findUnique({
            where:{
                cnpj: comapanyDto.cnpj
            }
        })

        return company
      }

    async create(companyDto: CompanyDto){
        const company = await this.prisma.company.create({
            data:{
                cnpj: companyDto.cnpj,
                city: companyDto.city,
                name: companyDto.name,
                number: companyDto.number,
                segment: companyDto.segment,
                state: companyDto.state
            }
        })
        return company
    }
}