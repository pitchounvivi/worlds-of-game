export class User {

    constructor(login, password, surname, firstname, lastname, phone, address, city, zipCode) {
        this.surname = surname;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = login;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.password = password;
    }
}