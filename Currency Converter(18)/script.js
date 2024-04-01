let currency = () => {
    let usa = document.getElementById("number").value;
    let india = document.getElementById("number1").value;

    india = usa * 82.88;
    document.getElementById("number1").value = india;
}