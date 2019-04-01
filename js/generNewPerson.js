let countPerson = 0;
let quantityPerson = 2;
const persons = [];

const inpName = document.getElementById("name");
const inpAge = document.getElementById("age");
const inpGender = document.getElementById("gender");
const inpPasport = document.getElementById("passport");
const inpPayment = document.getElementById("payment");
const inpHealth = document.getElementById("health");
const inpQuantity = document.getElementById("quantity");

function CreateOptionPerson () {
    this.name = inpName.value;
    this.age = inpAge.value;
    this.isHasPassport = inpPasport.value;
    this.gender = inpGender.value;
    this.payment = inpPayment.value;
    this.health = inpHealth.value;
    this.quantityPerson = +inpQuantity.value;
}

function createNewTeam () {
    const currentOptions = new CreateOptionPerson();
    quantityPerson = currentOptions.quantityPerson;
    persons.length = 0;
    let i = 0;
    while (i<quantityPerson) {
        if (i===0) {
          persons.push(new Person(currentOptions.name, currentOptions.age, currentOptions.isHasPassport, currentOptions.gender, currentOptions.payment, currentOptions.health));
          i++;
        } else {
          persons.push(new Person());
          i++;
        }

    }
}

function Person (name, age, isHasPassport, gender, payment, healthy) {
    this.id = this.setID();
    this.name = name || this.setName();
    this.age = age || this.setAge();
    this.isHasPassport = isHasPassport || this.setPassport();
    this.gender = gender || this.setGender();
    this.payment = payment || this.setPayment();
    this.health = healthy || this.setHealth();
}

Person.prototype.setID = function () {
    const date = new Date();
    return `${++countPerson}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

Person.prototype.setName = function () {
    const name = faker.name.findName();
    return name;
};

Person.prototype.setAge = function () {
    const age = Math.round(Math.random()*8) + 16 ;
    return age;
};

Person.prototype.setPassport = function () {
    const passInd = Math.round(Math.random());
    const passport = [true, false][passInd];
    return passport;
};

Person.prototype.setGender = function () {
    const genderInd = Math.round(Math.random());
    const gender = ['male', 'female'][genderInd];
    return gender;
};

Person.prototype.setPayment = function () {
    const step = Math.round(Math.random()*200)+900;
    const payment = 100 * Math.round(step/100);
    return payment;
};

Person.prototype.setHealth = function () {
    const health = Math.round(Math.random()*30) + 65;
    return health;
};


