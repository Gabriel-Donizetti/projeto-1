import { PrismaClient } from "@prisma/client";
import { CompanyDto } from "src/interface/company";

export default class companyRepository {
    
    prisma: PrismaClient

    constructor () {
        this.prisma = new PrismaClient()
    }

    async findCompanyByCnpj(companyDto: CompanyDto) {
        const company = await this.prisma.company.findUnique({
            where:{
                cnpj: companyDto.cnpj
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
    async findBySegment(companyDto: CompanyDto){
        const segments = await this.prisma.company.findMany({
            where:{
                segment: companyDto.segment
            },
            select:{
                number: true
            }
        })
        return segments
    }
    async findByCity(companyDto: CompanyDto){
        const citys = await this.prisma.company.findMany({
            where:{
                city: companyDto.city
            },
            select:{
                number: true
            }
        })
        return citys
    }

    
}