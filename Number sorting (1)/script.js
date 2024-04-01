const array = []
function fun1(){

    let fnum=document.getElementById("num").value;

    array.push(fnum);
    console.log(array);

    document.getElementById("result1").innerHTML = "Origanal Array:-" + JSON.stringify(array)  ;

    let sort = array.sort(function (a,b){return a-b})

    document.getElementById("result2").innerHTML = "Sorted Array:-" + JSON.stringify(sort) ;



}