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
            data: JSON.stringify(user),
            dataType: "json" //conversion automatique de la reponse en json
        });
    }

    static postLogin(){
        return $.ajax({
            url: `http://worldsofgame.alwaysdata.net/user.php?email=${user.email}&password=${user.password}`,
            method: "GET",
            contentType: "application/json",
            dataType: "json"
        })
    }


    // version requête en javascript natif
    static put() {
        return new Promise(
            (resolve, reject) => {

                const xhr = new XMLHttpRequest;
                xhr.open("PUT", "url");
                xhr.setRequestHeader("ContentType", "application/json");
                xhr.onload = () => {
                    if (200 === xhr.status || 201 === xhr.status) {
                        resolve(JSON.parse(xhr.response));
                    }

                    xhr.onerror();
                }
                xhr.onerror = () => {
                    reject(xhr);
                }
                xhr.send(JSON.stringify(user));
            }
        );
    }

}