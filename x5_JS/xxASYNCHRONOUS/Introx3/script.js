//Promises
const simba = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((response) => {
      if (response.results[0].gender === "male") resolve();
      else reject();
    });
});

simba
  .then(function () {
    console.log("it's a male :)");
  })
  .catch(function () {
    console.log("it's a female :)");
  });
