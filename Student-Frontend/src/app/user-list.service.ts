import { Injectable } from "@angular/core";
import { User } from "./shared/user.model";

@Injectable()
export class UserListService {

  private users: User[] = [
    new User('Janmejay', 'Ghosh', 'jghosh@argusoft.com', 'jghosh', '123'),
    new User('Parth', 'Tanna', 'ptanna@argusoft.com', 'patnna', '123')
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  getUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}
