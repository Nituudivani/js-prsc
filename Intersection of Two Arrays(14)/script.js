let array = [];

          function intersection(){

            let fnum=document.getElementById("number").value;
        
            array.push(fnum);

            document.getElementById("result").innerHTML = " Main Array:-" + JSON.stringify(array);

            let inter = array.filter((item,number) => array.indexOf(item) == number);
            

            document.getElementById("result1").innerHTML ="intersection of two number :-" + JSON.stringify(inter);



          }
