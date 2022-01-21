export default class PrincipalExtension {

  id: string;
  username: string;
  accountType: string;

  firstName: string;
  lastName: string;
  email: string;

  constructor(id: string, un: string, accountType: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.username = un;
    this.accountType = accountType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
