let main = [];
let even = [];
let odd = [];

function fun1(){
    let number = document.getElementById("num").value;
    main.push(number);
    if(number % 2 == 0){
        even.push(number);
    
    }
    else{
        odd.push(number);
    }

    document.getElementById("result3").innerHTML = "Main Array:-" + JSON.stringify(main);
    document.getElementById("result4").innerHTML = "Even Number:-" + JSON.stringify(even);
    document.getElementById("result5").innerHTML = "Odd Number:-" + JSON.stringify(odd);
}
