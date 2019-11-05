import { User } from "../models/user.model";

const user = new User("John", "secret");

export class UserService{

    static get(){
        return user;
    }

}