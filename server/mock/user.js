
export default class User {
  constructor(email, password, username) {
    this.profile = {};
    this.profile.email = email;
    this.profile.username = username;
    this.profile.password = password;
  }
}
