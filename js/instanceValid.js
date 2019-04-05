let setPersonAgePolice = 18;
let setPersonAgeMalePolice = 22;
let setPersonAgeFemalePolice = 18;
let setPersonHealthMedical = 75;
let setPersonHealthMedicalMale = 75;
let setPersonHealthMedicalFemale = 85;
let setPersonPaymantBankMale = 1000;
let setPersonPaymantBankFemale = 950;
let setTimeoutBank = 40000;
let setTimeoutMedicalHealth = 15000;
let setTimeoutMedicalHealthGender = 15000;
let setTimeoutPoliceAge = 5000;
let setTimeoutPoliceGender = 8000;
let setTimeoutPolicePassport = 12000;
let flag = 0;


function setConfig () {
    setPersonAgePolice = document.getElementById('minAgePolice').value || 18;
    setPersonAgeMalePolice = document.getElementById('minAgePoliceMale').value || 22;
    setPersonAgeFemalePolice = document.getElementById('minAgePoliceFemale').value || 18;
    setPersonHealthMedical = document.getElementById('minHealthMedic').value || 75;
    setPersonHealthMedicalMale = document.getElementById('minHealthMale').value || 75;
    setPersonHealthMedicalFemale = document.getElementById('minHealthFemale').value || 85;
    setPersonPaymantBankMale = document.getElementById('minPaymantMale').value || 1000;
    setPersonPaymantBankFemale = document.getElementById('minPaymantFemale').value ||  950;
}

function checkVerifyVisa() {
    console.log(flag);
}

function checkPoliceAge (person) {
    if (person.age >= setPersonAgePolice) {
        return true;
    }
    return false;
}

function checkPoliceGenderMale (person) {
    if (person.gender === 'male' &&  person.age > setPersonAgeMalePolice) {
        return true;
    }
    return false;
}

function checkPoliceGenderFemale (person) {
    if (person.gender === 'female' &&  person.age > setPersonAgeFemalePolice) {
        return true;
    }
    return false;
}

function checkMedicalPersonHealth (person) {
    if (person.health > setPersonHealthMedical) {
        return true;
    }
    return false;
}

function checkMedicalPersonHealthMale (person) {
    if (person.health > setPersonHealthMedicalMale && person.gender === 'male') {
        return true;
    }
    return false;
}

function checkMedicalPersonHealthFemale (person) {
    if (person.health > setPersonHealthMedicalFemale && person.gender === 'female') {
        return true;
    }
    return false;
}

function checkBankPersonPaymentMale (person) {
    if(person.gender === 'male' && person.payment > setPersonPaymantBankMale) {
        return true;
    }
    return false;
}

function checkBankPersonPaymentFemale (person) {
    if(person.gender === 'female' && person.payment > setPersonPaymantBankFemale) {
        return true;
    }
    return false;
}

function policePromise1 (person) {

    return new Promise (( resolve, reject ) => {

        createElemPolice1(rowPolice,`police_${person.id}`);
        createElemPolice2('yes', 'check-w', `${person.id}`, `pol1_${person.id}`)

        return setTimeout( () => {

            if (checkPoliceAge(person)) {

                document.getElementById(`pol1_${person.id}`).className = 'check';
                flag++;
                console.log(`${person.name} check police 1`);
                person.check++;
                resolve(person);

            } else {

                document.getElementById(`pol1_${person.id}`).className = 'check-no'
                document.getElementById(`pol1_${person.id}`).innerText = 'no';
                console.log(`${person.name} NOT check police 1`);
                reject('Age must be over 18')
            }
        }, setTimeoutPoliceAge);
    });
}

function policePromise2 (person) {

    return new Promise((resolve, reject) => {

        createElemPolice2('yes', 'check-w', `${person.id}`, `pol2_${person.id}`)

        return setTimeout( () => {

            if (person.gender === 'male') {

                if (checkPoliceGenderMale(person)) {

                    document.getElementById(`pol2_${person.id}`).className = 'check';
                    flag++;
                    console.log(`${person.name} check police 2`);
                    person.check++;
                    resolve(person);

                } else {

                    document.getElementById(`pol2_${person.id}`).className = 'check-no'
                    document.getElementById(`pol2_${person.id}`).innerText = 'no';
                    console.log(`${person.name} NOT check police 2`);
                    reject('For male age must be more than 22 year')
                }
            }
            if (person.gender === 'female') {

                if (checkPoliceGenderFemale(person)) {

                    document.getElementById(`pol2_${person.id}`).className = 'check';
                    flag++;
                    console.log(`${person.name} check police 2`);
                    person.check++;
                    resolve(person);

                } else {

                    document.getElementById(`pol2_${person.id}`).className = 'check-no';
                    document.getElementById(`pol2_${person.id}`).innerText = 'no'               ;
                    console.log(`${person.name} NOT check police 2`);
                    reject('For female age must be more than 18 year')
                }
            }
        }, setTimeoutPoliceGender);
    });
}

function policePromise3 (person) {

    return new Promise((resolve, reject) => {

        createElemPolice2('yes', 'check-w', `${person.id}`, `pol3_${person.id}`)

        return setTimeout( () => {

            if (person.isHasPassport) {

                document.getElementById(`pol3_${person.id}`).className = 'check';
                console.log(`${person.name} check police 3`);
                flag++;
                person.check++;
                resolve(true);

            } else {

                document.getElementById(`pol3_${person.id}`).className = 'check-no';
                document.getElementById(`pol3_${person.id}`).innerText = 'no';
                console.log(`${person.name} NOT check police 3`);
                reject('Person have not a passport');
            }
        }, setTimeoutPolicePassport);
    });
}


function medicalPromise1 (person) {

    return new Promise (( resolve, reject ) => {

        createElemMedical1(rowMedecin,`medicine_${person.id}`);
        createElemMedical2('yes', 'check-w', person.id, `med1_${person.id}`);

        return setTimeout( () => {

            if (checkMedicalPersonHealth(person)) {

                document.getElementById(`med1_${person.id}`).className = 'check';

                flag++;
                console.log(`${person.name} check medical 1`);
                person.check++;
                resolve(person);

            } else {

                document.getElementById(`med1_${person.id}`).className = 'check-no';
                document.getElementById(`med1_${person.id}`).innerText = 'no';
                console.log(`${person.name} NOT check medical 1`);
                reject('Health must be over 75%');
            }
        }, setTimeoutMedicalHealth);
    })
}

function medicalPromise2 (person) {

    return new Promise((resolve, reject) => {

        createElemMedical1(rowMedecin,`medicine_${person.id}`);
        createElemMedical2('yes', 'check-w', person.id, `med2_${person.id}`);

        return setTimeout( () => {

            if (person.gender === 'male') {

                if (checkMedicalPersonHealthMale(person)) {

                    document.getElementById(`med2_${person.id}`).className = 'check';
                    flag++;
                    console.log(`${person.name} check medical 2`);
                    person.check++;
                    resolve(true);

                } else {

                    document.getElementById(`med2_${person.id}`).className = 'check-no';
                    document.getElementById(`med2_${person.id}`).innerText = 'no';
                    console.log(`${person.name} NOT check medical 2`);
                    reject('For male healthy must be more than 75%');
                }
            }
            if (person.gender === 'female') {

                if (checkMedicalPersonHealthFemale(person)) {

                    document.getElementById(`med2_${person.id}`).className = 'check';
                    flag++;
                    console.log(`${person.name} check medical 2`);
                    person.check++;
                    resolve(true);

                } else {

                    document.getElementById(`med2_${person.id}`).className = 'check-no';
                    document.getElementById(`med2_${person.id}`).innerText = 'no';
                    console.log(`${person.name} NOT check medical 2`);
                    reject('For female healthy must be more than 85%');
                }
            }
        }, setTimeoutMedicalHealthGender);
    });
}

function bankPromise1 (person) {

    return new Promise (( resolve, reject ) => {
        createElemb(rowBank,`bank_${person.id}`);
        createElemBank ('yes', 'check-w', person.id, `ban_${person.id}`)
        return setTimeout( () => {

            if (person.gender === 'male') {
                if (checkBankPersonPaymentMale(person)) {
                    document.getElementById(`ban_${person.id}`).className = 'check';
                    // createElem('yes', rowBank, 'check', person.id);
                    flag++;
                    console.log(`${person.name} check bank`);
                    person.check++;

                    console.log(person.name, '   =   ', person.check)
                    if (person.check === 6) {
                        createElemVisa('yes', rowDecision, 'check', person.id);
                    } else {
                        createElemVisa('no', rowDecision, 'check-no', person.id);
                    }
                    resolve(true);

                } else {
                    document.getElementById(`ban_${person.id}`).className = 'check-no';
                    document.getElementById(`ban_${person.id}`).innerText = 'no';
                    console.log(`${person.name} NOT check bank`);

                    //  createElem('no', rowBank, 'check-no', person.id);

                    console.log(person.name, '   =   ', person.check)
                    if (person.check === 6) {
                        createElemVisa('yes', rowDecision, 'check', person.id);
                    } else {
                        createElemVisa('no', rowDecision, 'check-no', person.id);
                    }
                    reject('Payment must be over 1000$');
                }
            }
            if (person.gender === 'female') {
                if (checkBankPersonPaymentFemale(person)) {
                    document.getElementById(`ban_${person.id}`).className = 'check';
                    //createElem('yes', rowBank, 'check', person.id);
                    flag++;
                    console.log(`${person.name} check bank`);
                    person.check++;
                    console.log(person.name, '   =   ', person.check)
                    if (person.check === 6) {
                        createElemVisa('yes', rowDecision, 'check', person.id);
                    } else {
                        createElemVisa('no', rowDecision, 'check-no', person.id);
                    }


                    resolve(true);
                } else {
                    document.getElementById(`ban_${person.id}`).className = 'check-no';
                    document.getElementById(`ban_${person.id}`).innerText = 'no';
                    console.log(`${person.name} NOT check bank`);
                    console.log(person.name, '   =   ', person.check)

                    //createElem('no', rowBank, 'check-no', person.id);
                    if (person.check === 6) {
                        createElemVisa('yes', rowDecision, 'check', person.id);
                    } else {
                        createElemVisa('no', rowDecision, 'check-no', person.id);
                    }
                    reject('Payment must be over 950$');

                }
            }
        }, setTimeoutBank);
    });
}

