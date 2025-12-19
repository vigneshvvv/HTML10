

let users = [{
    name: "vignesh",
    lastname: "kumar",
    password: "vignesh",
    age: 25,
    mobile: 3242131232,
    emailId: "dfsdfa@gmail.com"
},
{
    name: "3rfdfAsdf",
    lastname: "svdvdsvdsv",
    password: "vignesh",
    age: 27,
    mobile: 342342342,
    emailId: "dfsdfa@gmail.com"
},
{
    name: "sdsfdsfdsvs",
    password: "vignesh",
    lastname: "yrgrrgsd",
    age: 22,
    mobile: 6334353,
    emailId: "dfsdfa@gmail.com"
}


]

let filteredcontent = users.filter((e) => e.age === 18);
if(filteredcontent.length === 0){
    console.log("user not present");
}
console.log(filteredcontent);

let mappedcontent = users.filter((e) => e.age === 25).map((e) => e.name);
console.log(mappedcontent);

let finduser = users.find((e) => e.name ===" vignesh" && e.password === "vignesh");
if(finduser !== undefined){
    console.log("successfully logged in");
}else{
    console.log("username not found please register");
}

let userpresent = false;

users.forEach((e) => {
    if(e.name === "vignesh" && e.lastname === "kumar"){
        e.name = "kumar"
        console.log(e);
        userpresent = true;
    }
});

if(userpresent){
    console.log(users);
    console.log("username already present in list");
}








let obj = document.getElementById("newForm").addEventListener("submit", function(event){
    event.preventDefault();
    let form = document.getElementById("newForm");
    console.log(event);
    let formdata = new FormData(event.target);
    let result = Object.fromEntries(formdata.entries());


    // let validation = users.find((e) => e.name === result.firstname && e.lastname === result.lastname);
    // let h1doc = document.getElementById("outputObj");
    // if(validation !== undefined){
    //     h1doc.textContent = `The username ${result.firstname} already exist please register`;
    // }else{
    //     h1doc.textContent = "Registered successfully please login";
    // }

    console.log(result);

    postRegistrationData(result);

} )

async function postRegistrationData(event){
     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(event)
    });

    if(!response.ok){
        console.log("Error occured while posting data");

    }

    const result =  await response.json();
    console.log(result);
}




let number = 1;
function addNumber(){
    number++;
    console.log(number);
}


async function getUserData(){
    let result = await fetch("https://dummyjson.com/users");
    let output = await result.json();
    let users = await output.users;
    users.forEach((user) => {
       let tb = document.getElementById("tablebody");
       let trdata = document.createElement("tr");
        trdata.innerHTML = `<td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.role}</td>
        `
        tb.append(trdata);
    });
    // destructure(users);
    console.log(output);

}

async function createPost(){
    const data = {
        title: "hello",
        body: "jihuibuubu",
        userId: 1
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        console.log("Error occured while posting data");

    }

    const result =  await response.json();
    console.log(result);
}

function destructure(data){
let result = data[1];
let doc = document.getElementById("outputObj");
doc.textContent = `Hi welcome ${result.firstName}`;
console.log("obtainer result",result);
}
