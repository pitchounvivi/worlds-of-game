export class User {

    constructor (login, password, firstName, lastName, mail, phone, address, city, zipCode){
        this.login = login; //a changer par surname
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
    }

}