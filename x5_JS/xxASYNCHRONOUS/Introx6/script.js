//Problem and do it with Callback , Promise , Async and Await
//Bring data from API and print it on console

// While fetching data via callbacks
// Note: There must be an argument that accepts a callback
// because fetch will make it asynchronous, but it will run at some point
// and will be executed synchronously by the callback.

/*
function dataFetcher(url, callback) {
  fetch(url)
    .then((raw) => raw.json())
    .then((result) => {
      callback(result);
    });
}

dataFetcher("https://randomuser.me/api/", function (result) {
  console.log(result);
});
*/

//Promise

/*
function dataFetcher(url) {
  const promise = new Promise((resolve, reject) => {
    fetch(url)
      .then((raw) => raw.json())
      .then((result) => {
        resolve(result);
      });
  });
  return promise;
}

dataFetcher("https://randomuser.me/api").then(function (result) {
  console.log(result);
});

*/

//Async / Await
async function dataFetcher3(url) {
  let data = await fetch(url);
  let result = await data.json();
  return result;
}
async function result() {
  const data = await dataFetcher3("https://randomuser.me/api");
  console.log(data);
}
result();
