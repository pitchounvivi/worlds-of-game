import { User } from "../models/user.model";
import $ from "jquery";

const user = new User("John", "secret");

export class UserService {

    static get() {
        return user;
    }

    static post() {
        //on formule une requête
        $.ajax({
            url: "http://worldsofgame.alwaysdata.net/user.php",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(this.user),
            dataType: "json" //conversion automatique de la reponse en json
        });

        return true; // cette ligne permet le renvoi du résultat de $.ajax
    }

}