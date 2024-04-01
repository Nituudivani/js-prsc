function magic() {
    let Number = document.getElementById("num").value;

    let a = 0;
    let b = 1;
    let result;

    for (let i=2 ; i <=Number; i++){
   
    result = a+b;
    a = b;
    b = result;

    console.log(result)

    document.getElementById("result1").innerHTML = result;

    }
}