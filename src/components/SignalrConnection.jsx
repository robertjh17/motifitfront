import * as signalR from "@microsoft/signalr";
const URL = "https://localhost:7150/motihub";

class Connector {
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(URL)
      .withAutomaticReconnect()
      .build();

    // Start de verbinding en wacht tot deze is gestart voordat je gegevens verstuurt
    this.connection.start()
  }

  setUsername(username) {
    if (this.connection.state === signalR.HubConnectionState.Connected) {
      this.connection.send("setUsername", username)
        .then(() => console.log("Gebruikersnaam ingesteld"))
        .catch(error => console.error("Fout bij het instellen van de gebruikersnaam:", error));
    } else {
      console.error("De verbinding is niet in de 'Connected'-status.");
    }
  }

  static getInstance() {
    if (!Connector.instance)
      Connector.instance = new Connector();
    return Connector.instance;
  }
}

export default Connector;
