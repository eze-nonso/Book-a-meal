export const dummyUser = {
  profile: {
    email: 'dummy@mail.com',
    username: 'dummyusrname',
    password: 'pass',
  },
};

export class UserModel {
  constructor(email, password, username) {
    this.profile = {};
    this.profile.email = email;
    this.profile.username = username;
    this.profile.password = password;
  }
}
