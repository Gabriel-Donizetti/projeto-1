import Sender from '@utils/sender';

export default class AdminService {

  constructor() {
   
  }
  async createInstance() {
    const sender = new Sender()
    if(!sender){
        throw new Error('Error on create instance')
    }

   return true
  }
  
}

 
