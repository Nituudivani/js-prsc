let array = [];

          let sumandaverage = () => {

            let num=document.getElementById("number").value;
        
            array.push(num);
            console.log(array);

            document.getElementById("result").innerHTML = " Main Array:-" + JSON.stringify(array);

            let sum = 0

            for(let i=0; i < array.length; i++){
            
          sum += parseInt(array[i]);

            console.log(sum)
            document.getElementById("result1").innerHTML = " Sum of array:-" +  parseInt(sum) ;

            let avr = sum / array.length ;

            document.getElementById("result2").innerHTML = " Avarge of array:-" +  parseInt(avr) ;




            }

          }