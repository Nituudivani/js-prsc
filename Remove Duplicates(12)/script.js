
let array = [];

          function removeDublicat(){

            let fnum=document.getElementById("num").value;
        
            array.push(fnum);
            console.log(array);

            document.getElementById("result").innerHTML = " Main Array:-" + JSON.stringify(array);

            let removeDuplicates = array.filter((item,index) => array.indexOf(item) == index);
            

            document.getElementById("result1").innerHTML ="Remove Dublicate Value :-" + JSON.stringify(removeDuplicates);

          }