

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
