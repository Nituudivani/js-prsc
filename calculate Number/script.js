function fun1(){
    let fnum=document.getElementById("txtf1").value;
    let snum=document.getElementById("txtf2").value;

    let tot= parseInt(fnum) + parseInt(snum);

    document.getElementById("result").innerHTML= "Result:-" + tot;

}

function sub(){
    let fnum=document.getElementById("txtf3").value;
    let snum=document.getElementById("txtf4").value;

    let tot= parseInt(fnum) - parseInt(snum);

    document.getElementById("result-1").innerHTML= "Result:-" + tot;
}

function mul(){
    let fnum=document.getElementById("txtf5").value;
    let snum=document.getElementById("txtf6").value;

    let tot= parseInt(fnum) * parseInt(snum);

    document.getElementById("result-2").innerHTML= "Result:-" + tot;
}

function div(){
    let fnum=document.getElementById("txtf7").value;
    let snum=document.getElementById("txtf8").value;

    let tot= parseInt(fnum) / parseInt(snum);

    document.getElementById("result-3").innerHTML= "Result:-" + tot;
}

