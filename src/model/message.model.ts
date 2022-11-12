
export class Message {
    constructor(status?: string, message?: string){
        this.status = status;
        this.message = message;
    }

    status: string;
    message: string;
}