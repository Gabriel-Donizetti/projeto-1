import { Request, Response } from 'express';
import Sender from '@utils/sender';

const sender = new Sender()

export default class AdminController {
  static async createNewInstance(req: Request, res: Response) {
    try {
        sender.initialize('teste', '5541996261489', 'message test')
        
        return res.status(201).send({qr_code: sender.qrCode, connected: sender.isConnected});
    } catch (error) {
        return res.status(502).json(error.message);
    }
  }
}
