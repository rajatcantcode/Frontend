//Async and Await
async function abcd() {
  let a = await fetch(`https://randomuser.me/api/`).then((raw) => raw.json());
  console.log(a);
}
abcd();

