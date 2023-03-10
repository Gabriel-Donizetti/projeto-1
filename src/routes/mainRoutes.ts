import { Router } from 'express';
import { adminRouter } from './adminRoute';
import { companyRouter } from './companyRoute';

const routes: Router = Router();

routes.use('/company', companyRouter);
routes.use('/admin', adminRouter)

export default routes;
