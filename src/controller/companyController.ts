import { Request, Response } from 'express';
import { CompanyDto } from 'src/interface/company';
import CompanyService from 'src/service/companyService';

const companyService = new CompanyService()

export default class CompanyControler {
  static async createCompanys(req: Request, res: Response) {
    try {
        const {cnpj, name,state ,city ,segment, number} = req.body

        const company: CompanyDto = {
          cnpj, name,state ,city ,segment, number
        }

        await companyService.create(company)
        return res.status(201).json('created');
    } catch (error) {
        return res.status(502).json(error.message);
    }
  }
}
