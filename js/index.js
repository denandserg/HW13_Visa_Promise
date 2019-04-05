window.onload = () => {
    init();
};

//const btnSubmitPerson = document.getElementById('btnPersonSubm');
const btnGetVisaForAll = document.getElementById('startAll');
const bttnReset = document.getElementById('reset');


function init() {
    btnGetVisaForAll.addEventListener('click', () => {
        checkPersonsManual();
        migrationService(persons)
            .then( arrPers => {
                console.log(arrPers);
                return makeArrPersonsPromises(arrPers);
            })
            .then( arrOfProm => {
                console.log(arrOfProm);
                return makePromiseAll(arrOfProm);
            })
            .then( arrPromiseAll => {
                setTimeout(checkVerifyVisa(), 3000);
                console.log(arrPromiseAll);
                return Promise.race(arrPromiseAll);
            })
            .then( (firstPerson, person) => {
                console.log(firstPerson);
                console.log(person);
            })
        /*  .catch( reason => {
              console.log(reason);
          })*/

    })
}

bttnReset.addEventListener('click', () => {
    rowNamePerson.innerHTML = `<h3>Name Person</h3>`;
    rowMigService.innerHTML = `<h3>Migration Serves</h3>`;
    rowPolice.innerHTML = `<h3>Police</h3>`;
    rowMedecin.innerHTML = `<h3>Medecin</h3>`;
    rowBank.innerHTML =  `<h3>Bank</h3>`;
    rowDecision.innerHTML = `<h3>Decision</h3>`;
    persons = [];
});

