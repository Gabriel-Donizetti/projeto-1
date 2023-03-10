import { Router } from 'express';
import CompanyControler from '../controller/companyController';


export const companyRouter: Router = Router();

<<<<<<< HEAD
companyRouter.get('/create-companys', CompanyControler.createCompanys);

//companyRouter.get('/segments', CompanyControler.findSegment);


=======
companyRouter.post('/create-companys', CompanyControler.createCompanys);
>>>>>>> f573271d458153c3fbe8777077bc4f481315c1f4

companyRouter.get('/find-by', CompanyControler.findBy);
