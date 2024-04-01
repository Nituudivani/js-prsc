
const fruits = ["Banana", "Orange", "Apple", "Mango"];

          function elementofindex(){


            let fnum=document.getElementById("number").value;

           
                let indexP = fruits.indexOf(fnum);

                console.log(indexP);
    
    
                document.getElementById("result").innerHTML = " Ans: " + JSON.stringify(indexP);

                if(indexP == -1){
                  document.getElementById("result").innerHTML = "Invalid index enter"
                }
        


          }
      