let array = [];
function fun2(){

    let fnum=document.getElementById("num").value;

    array.push(fnum);
    console.log(array);

    document.getElementById("result").innerHTML = " Main Array:-" + JSON.stringify(array);

    let sort = array.sort(function (a,b){return a-b})

    let small = sort[0];
    let large = sort[sort.length - 1];

    document.getElementById("result1").innerHTML = "Smallest Number:-" + JSON.stringify(small);
    document.getElementById("result2").innerHTML = "largest Number:-" + JSON.stringify(large);

}