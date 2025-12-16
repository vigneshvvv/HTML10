

let obj = document.getElementById("newForm").addEventListener("submit", function(event){
    event.preventDefault();
    let form = document.getElementById("newForm");
    console.log(event);
    let formdata = new FormData(event.target);
    let result = Object.fromEntries(formdata.entries());
    console.log(result);

} )



let number = 1;
function addNumber(){
    number++;
    console.log(number);
}


async function getUserData(){
    let result = await fetch("https://dummyjson.com/users");
    let output = await result.json();
    let users = await output.users;
    destructure(users);
    console.log(output);

}

function destructure(data){
let result = data[1];
let doc = document.getElementById("outputObj");
doc.textContent = `Hi welcome ${result.firstName}`;
console.log("obtainer result",result);
}
