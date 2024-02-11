function doSomeAsyncTask(url, callback) {
  fetch(`${url}`)
    .then((raw) => raw.json())
    .then((result) => {
      callback(result);
    });
}

doSomeAsyncTask("https://randomuser.me/api/", callback);

function callback(result) {
  console.log(result.results[0].gender);
  console.log("Wassup Nigga");
}
