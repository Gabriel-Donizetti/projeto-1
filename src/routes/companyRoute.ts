import { Router } from 'express';
import CompanyControler from '../controller/companyController';


export const companyRouter: Router = Router();

//companyRouter.get('/segments', CompanyControler.findSegment);
companyRouter.post('/create-companys', CompanyControler.createCompanys);

companyRouter.get('/find-by', CompanyControler.findBy);
