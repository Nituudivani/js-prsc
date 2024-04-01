const array = [];
function fun2(){

    let fnum=document.getElementById("num").value;

    array.push(fnum);
    console.log(array);

    document.getElementById("result").innerHTML = " Main Array:-" + JSON.stringify(array);

    let simp = array.map((nextValue) => nextValue * 2);

    document.getElementById("result1").innerHTML = " Map Number:-" + JSON.stringify(simp);





}