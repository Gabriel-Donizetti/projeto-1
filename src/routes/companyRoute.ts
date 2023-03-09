import { Router } from 'express';
import CompanyControler from '../controller/companyController';


export const companyRouter: Router = Router();

companyRouter.post('/create-companys', CompanyControler.createCompanys);

companyRouter.get('/find-by', CompanyControler.findBy);
