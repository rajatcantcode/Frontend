//Fetch API
fetch("https://randomuser.me/api/")
  .then((raw) => {
    return raw.json();
  })
  .then((readable) => console.log(readable[0]));

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((raw) => {
    return raw.json();
  })
  .then((readable) => console.log(readable));

//Axios
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((result) => console.log(result.data));
