import users from "../data/users";
import UserEntity from "../models/User.entity";

export default class User extends UserEntity {
  constructor(username, password, email,) {
    super(username,  password, email);
  }
  getUser(username) {
    console.log(users);
    return users.find((user) => user.username === username);
  }
  saveDB() {
    console.log(this);
    users.push(this);
  }
  saveUserNameLocalStorage() {
    localStorage.setItem("username", this.username);
  }
  getUserNameLocalStorage() {
    return localStorage.getItem("username");
  }
  deleteUserNameLocalStorage() {
    localStorage.removeItem("username");
  }
}
