function logic(){
    let num = document.getElementById("Number").value;

    if(num % 2 == 0){
        document.getElementById("result").innerHTML= num +  ":- This is even number";
    }
    else{
        document.getElementById("result").innerHTML=  num  +  ":- This is odd number";
    }

}
