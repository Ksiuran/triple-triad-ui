export default class RegisterUser {

  username: string;
  password: string;
  matchingPassword: string;

  constructor(username: string, password: string, matchingPassword: string) {
    this.username = username;
    this.password = password;
    this.matchingPassword = matchingPassword;
  }
}
