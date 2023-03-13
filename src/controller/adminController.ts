import { Request, Response } from 'express';
import Sender from '@utils/sender';
import AdminService from 'src/service/adminService';

const adminService = new AdminService()
const sender =  new Sender()
export default class AdminController {
  static async createNewInstance(req: Request, res: Response) {
    try {
        const send = await adminService.createInstance()
        if(send)
        return res.status(200).send({qr_code: sender.qrCode, connected: sender.isConnected});
    } catch (error) {
        return res.status(502).json(error.message);
    }
  }
}
