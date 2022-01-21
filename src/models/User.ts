export default class RegisterUser {

    id: string;
    username: string;
    accountType: string;
    cardCollection: number[];
  
    constructor(id: string, username: string, accountType: string, cardCollection: number[]) {
      this.id = id;
      this.username = username;
      this.accountType = accountType;
      this.cardCollection = cardCollection;
    }
  }