window.onload = () => {
    init();
};

const btnGetVisaForAll = document.getElementById('startAll');

function init() {
        btnGetVisaForAll.addEventListener('click', () => {
        createNewTeam();
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
                  console.log(arrPromiseAll);
                    return Promise.race(arrPromiseAll);
                })
                .then( (firstPerson, person) => {
                    console.log(firstPerson);

                  console.log(person);
                })
                .catch( reason => {

                    console.log(reason);
                });
          setTimeout(checkVerifyVisa, 41000);
        });
}

