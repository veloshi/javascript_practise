
// const charactersList = document.getElementById('charactersList');
// const searchBar = document.getElementById('searchBar');
// let hpCharacters =[];
// searchBar.addEventListener('keyup',(e)=>
// {
//     const searchString = e.target.value;
//     console.log(e);
//     const filteredcharacter = hpCharacters.filter(character=>{
//         return character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString);
//     })
//     console.log(filteredcharacter);
//     displayCharacters(filteredcharacter);
// });


// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };


// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();

//Function Statement aka Function Declaration
// function a(){
//     console.log("a called");
// }

// //Function Expression

// var b = function(){
//     console.log("b called");
// }
// a();
// b();
// //Funcb
// // output 
// //a called
// // cannot access 'b' before initialization
// //     at index.js:46:1

// //Anonymous Function A function without name is called anonymous function.
// var d = function(){
//     console.log("called d");
//  }

// require a function name (at index.js:64:1)

// Named function Expression 
// var c = function xyz(){
//     console.log("called c");
//  }

//Reference Error xyz not defined at index.js:75:1


//xyz();
// console.log(xyz);
// c();

// // Callback function in javascript
// setTimeout(function (){
//     console.log("timer");
//     },5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });

function attachEventListeners(){
let count = 0;
document.getElementById('clickme').addEventListener('click',function(){
console.log("CLICKED",++count)}
);
}

attachEventListeners();


function abc(c){
    console.log("abc");
    c();
}

function c(){
    console.log("abcd")
}

abc(c);
