// hofs -> higher order function
// aisa koi function jo ki ek function ko apne parameter mein store karle and/or ek function ko return karde

//1.fxn as parameter
function abcd(param) {}
abcd(function () {});

//2.return karde fxn
function xyz() {
  return function () {};
}
//Difference in Closures and hofs is it's not important in hofs ki returning fxn main parent ka variable ho
//whereas it's important in closures ki parent ka variable use ho raha ho returning fxn mein

/*BEST EXAMPLE OF hofs */
var arr = [1, 2, 3, 4, 5];
arr.forEach(function () {}); //<-- foreach = fxn uske andar ek aur function foreach(fxn)
