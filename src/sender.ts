import{create, Whatsapp, Message, SocketState} from "venom-bot"

class Sender {
    private Client!: Whatsapp

    constructor (){
        this.initialize()
    }

    async sendText(to: string, body:string){
        try {
             // TO = 5541999999999."@c.us"
            await this.Client.sendText(to, body)
        } catch (error) {
            console.log(error)
        }
    }

    private initialize(){

        const qr=(base64Qrimg: string)=>{

        }
        const status=(statusSession: string)=>{

        }
        const start=(client: Whatsapp)=>{
            this.Client = client

            this.sendText("554188334623@c.us", "teste")
        }

        create('sender-wapp-message', qr, status)
        .then((client)=>start(client))
        .catch((error)=> console.log(error))
    }
}
export default Sender