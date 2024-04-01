let array = [];


let arraysorting = () => {
    let number = document.getElementById("num").value;


    array.push(number);
    console.log(array);

    document.getElementById("result").innerHTML = "Main Array:-" + JSON.stringify(array);
    // using to a-b in ascending//
    let ascendings = array.sort(function (a, b) { return a - b });
    document.getElementById("result1").innerHTML = "ascendings:-" + JSON.stringify(ascendings);
    // using to b-a in descending//
    let descendings = array.sort(function (a, b) { return b - a });
    document.getElementById("result2").innerHTML = "descendings:-" + JSON.stringify(descendings);
}




