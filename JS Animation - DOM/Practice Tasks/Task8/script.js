//This is not the efficient code
var input = document.querySelector("input");
var people = document.querySelector("#people");

var data = [
  {
    name: "Rajni",
    src: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rajo",
    src: "https://images.unsplash.com/photo-1701309209296-bdfe97087074?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    name: "Rajat",
    src: "https://plus.unsplash.com/premium_photo-1661868397660-8c52f33c5934?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Raja",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rajooo",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rajati",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Raju",
    src: "https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rajk",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];
var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
    <div class="img">
      <img
        src="${elem.src}"
        alt=""
      />
    </div>
    <h4>${elem.name}</h4>
  </div>`;
});

people.innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value); //"harsh".startWith("hello")--> output : false
  });
  //now we have all the date in matching
  console.log(matching); //could check in console
  var pers = "";
  matching.forEach(function (elem) {
    pers += `<div class="person">
    <div class="img">
      <img
        src="${elem.src}"
        alt=""
      />
    </div>
    <h4>${elem.name}</h4>
  </div>`;
  });

  people.innerHTML = pers;
});

/* FILTER FUNCTION */
// [1,2,3,4,5,6].filter(function(e){
//     return e>2;<--always put true statement + mandatory to write return statement
// }) --> output : [3,4,5,6]
