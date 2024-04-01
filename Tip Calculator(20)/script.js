let TipCalculator = () => {
    let x=parseInt (document.getElementById("number").value);
    let y=parseInt (document.getElementById("number1").value);

    let Tip = x * y / 100;
    let Gst = x * 18 / 100;
    let Amount = y = x;

    let Total = x + Tip + Gst;

    document.getElementById("result").innerHTML = " Amount =  " + (Amount);
    document.getElementById("result1").innerHTML = " Tip =  " + (Tip);
    document.getElementById("result2").innerHTML = " Gst =  " + (Gst);
    document.getElementById("result3").innerHTML = " Total =  " + (Total);

}


