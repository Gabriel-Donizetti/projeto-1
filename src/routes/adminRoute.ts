import { Router } from 'express';
import AdminController from 'src/controller/adminController';


export const adminRouter: Router = Router();

adminRouter.post('/create-new-instance', AdminController.createNewInstance);




