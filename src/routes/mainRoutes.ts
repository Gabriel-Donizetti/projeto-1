import { Router } from 'express';
import { companyRouter } from './companyRoute';

const routes: Router = Router();

routes.use('/company', companyRouter);

export default routes;
