import { Router } from 'express';
import CompanyControler from '../controller/companyController';


export const companyRouter: Router = Router();

companyRouter.get('/create-companys', CompanyControler.createCompanys);
