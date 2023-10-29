import * as signalR from "@microsoft/signalr";
const URL = "https://localhost:7150/motihub"; //or whatever your backend port is
class Connector {
    constructor() {
        this.username = "";
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => console.log(err));
        this.events = (onMessageReceived) => {
            this.connection.on("messageReceived", ( message, postid) => {
                onMessageReceived( message, postid);
            });
        };
    }

    setUsername(username) {
        this.username = username;
    }

    newMessage = (messages, postid) => {
          
        this.connection.send("newMessage", messages, postid).then(x => console.log("sent"))
    }

    static getInstance() {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}

export default Connector;