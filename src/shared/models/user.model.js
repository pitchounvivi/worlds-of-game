export class User {

    constructor (login, password, firstname, lastname, mail, phone, address, city, zipCode){
        this.login = login; //a changer par surname
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
    }

}