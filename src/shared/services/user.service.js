import { User } from "../models/user.model";
import $ from "jquery";

const user = new User("John", "secret");

export class UserService {

    static get() {
        return user;
    }

    static post() {
        // le return permet de renvoyer tout le $.ajax
        return $.ajax({
            url: "http://worldsofgame.alwaysdata.net/user.php",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(this.user),
            dataType: "json" //conversion automatique de la reponse en json
        });
    }

}