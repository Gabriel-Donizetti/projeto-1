import { Request, Response } from 'express';
import companyService from '../service/companyService';

export default class CompanyControler {
  static async createCompanys(req: Request, res: Response) {
    try {
        const {name,state ,city ,segment, number} = req.body
        const resService = await companyService.create(name,state ,city ,segment, number)
        return res.status(200).json(resService);
    } catch (error) {
        return res.status(502).json({error: "error"});
    }
  }

  static async findSegment(req: Request, res: Response) {
    try {
        const {segment} = req.body
        const resService = await companyService.findBySegment(segment)
        return res.status(200).json(resService);
    } catch (error) {
        return res.status(502).json({error: "error"});
    }
  }
}

