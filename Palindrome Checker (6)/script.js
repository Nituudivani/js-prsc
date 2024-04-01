function palindrome(){
    let Number = document.getElementById("num").value;
    let Reverse = Number.split("").reverse("").join("");

    if(Number == Reverse){
        document.getElementById("result1").innerHTML = "This is Palindrome";

    }
    else{
        document.getElementById("result1").innerHTML = "This is not Palindrome";

    }

}