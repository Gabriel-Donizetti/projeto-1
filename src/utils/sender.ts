import { type } from "os";
import{create, Whatsapp, Message, SocketState} from "venom-bot"

export type QRcode = {
    base64Qr: string
    asciiQR: string
    attempts: number
}
class Sender {
    private Client!: Whatsapp
    private connected: boolean
    private qr: QRcode

    get isConnected () : boolean {
        return this.connected
    }

    get qrCode () : QRcode{
        return this.qr
    }

    constructor (){
        //this.initialize(instance )
    }

    async sendText(to: string, body:string){
        try {
<<<<<<< HEAD

             // TO = 5541999999999."@c.us"
=======
             // TO = 5541999999999."@c.us" <- flow this
>>>>>>> f573271d458153c3fbe8777077bc4f481315c1f4
            await this.Client.sendText(to, body)
        } catch (error) {
            console.log(error)
        }
    }

    async initialize(instance: string, number:string, message: string){

        const qr=(base64Qr: string, asciiQR: string, attempts: number)=>{
            this.qr = { base64Qr, asciiQR, attempts}
        }
        const status=(statusSession: string)=>{
            this.connected = ['isLoged', 'qrReadSucces', 'chatsaAvailable'].includes(statusSession)
        }
        const start=(client: Whatsapp)=>{
            this.Client = client

<<<<<<< HEAD
            client.onStateChange((state) => {
                this.connected = state === SocketState.CONNECTED
            })

            this.sendText(number + "@c.us", message)
=======
            this.sendText("554188334623"+"@c.us", "message")
>>>>>>> f573271d458153c3fbe8777077bc4f481315c1f4
        }

        create(instance, qr, status)
        .then((client)=>start(client))
        .catch((error)=> console.log(error))
    }
}
export default Sender