let array = [];

let ObjectCreation = () => {
    let Name = document.getElementById("text").value;
    let Age = document.getElementById("number").value;
    let Country = document.getElementById("text1").value;

array.push({
    name : Name,
    age : Age,
    country : Country,

})

document.getElementById("output").innerHTML = "ans:-" + JSON.stringify(array) ;

}