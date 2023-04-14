//callback,promises,thenables and async/await

// const users = fetch("https://jsonplaceholder.typicode.com/users").then(response=>
// {
//     return response.json();
// })
// .then(data => data.forEach(user => {
//     console.log(user);
// })
// )

// const myUsers ={
//     userlist:[]
// }
// const myCoolFunction = async() =>{
// const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const jsonUserData =await response.json();
// //console.log(jsonUserData)
// return jsonUserData;
// }

// //myCoolFunction();

// const anotherFunc = async()=>{
//     const data = await myCoolFunction()
//     myUsers.userlist = data
//     console.log(myUsers.userlist);
// }
// anotherFunc()

// const getAllUserEmails = async()=>
// {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData =await response.json();
//     console.log(jsonUserData)
//     const useremail = jsonUserData.map(user =>{
//         return user.email
//     });
//     posttowebpage(useremail);
        

// }

// const posttowebpage= (data=>{
//     console.log(data);
// })
// getAllUserEmails();


// const getDadJoke = async()=>{
//     const response = await fetch("https://icanhazdadjoke.com/"
//     ,{
//         method:"GET",
//         headers:{
//             Accept:"application/json"
//         }
//     });
//     const jsonjokedata = await response.json();

//     console.log(jsonjokedata);
// }
// getDadJoke();

// const jokeobj ={
//     id: 'ysHQZvcpbFd', 
//     joke: `"Dad, I'm hungry." Hello, Hungry. I'm Dad.`, status: 200}
//     const posttDadJoke = async(jokeobj)=>{
//         const response = await fetch("https://httpbin.org/post"
//         ,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(jokeobj)
// //         });
// //         const jsonjokedata = await response.json();
    
// //         console.log(jsonjokedata.headers);
// //     }
// //     posttDadJoke(jokeobj);

// const getDadJoke = async(firstname,lastname)=>{
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstname=${firstname}&lastname=${lastname}`);
//     const jsonjokedata = await response.json();

//     console.log(jsonjokedata.value.joke);
// }
// getDadJoke("Bruce","Lee");


// function Outer() {
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// //var close = 
// Outer()();

a();
b();
//Function Statement
function a(){
    console.log("a called");
}

//Function Expression

const b = function(){
    console.log("b called");
}