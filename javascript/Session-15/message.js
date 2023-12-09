class Message{
    constructor(sender,message){
        this.sender=sender;
        this.message=message;
        this.timestamp= new Date();
    }

    display(){
        console.log(`Sender: ${this.sender} 
        ${this.formatTimeStamp()}: ${this.message}`);
    }
    formatTimeStamp(){
        return this.timestamp.toLocaleTimeString();
    }
}
class ChatRoom{
    constructor(){
        this.messages=[];
    }
    sendMessage(sender,message){
        const msgObj= new Message(sender,message);//Object of Message Class
        this.messages.push(msgObj);
        this.displayChat();
    }
    displayChat(){
        console.clear();//just to clear console
        this.messages.forEach((msg)=>msg.display());
    }
}

const chat= new ChatRoom();
chat.sendMessage('Sonam','Hello');
chat.sendMessage('Abhishek',"How Are you?");
chat.sendMessage('Anita','Good Evening..!!');