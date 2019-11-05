export class User {
    constructor(login, password, surname, firstname, lastname, phone, address, city, zipCode, gender) {
        this.surname = surname; //surname
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = login; //unique
        this.phone = phone; //unique
        this.adress = address;
        this.city = city;
        this.zip = zipCode;
        this.password = password;
        this.gender = gender;
    }
}