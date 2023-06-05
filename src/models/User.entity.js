export default class UserEntity {
  constructor(username = "", email = "", password = "") {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get getUsername() {
    return this.username;
  }
  get getEmail() {
    return this.email;
  }
  get getPassword() {
    return this.password;
  }
  set setUsername(username) {
    this.username = username;
  }
  set setEmail(email) {
    this.email = email;
  }
  set setPassword(password) {
    this.password = password;
  }
}
