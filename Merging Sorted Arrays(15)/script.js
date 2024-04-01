let array = [1,2,3,4,5];
let array1 = [6,7,8,9,10]
let array2 =[]

let sortedarrays = () => {
    // let num=document.getElementById("number").value;

    // let merg = array2.concat(array,array1);

    // console.log(merg);

    // document.getElementById("result").innerHTML = JSON.stringify(merg)

        
          
   // spread opetors

    array2 = [...array,...array1]
    document.getElementById("result").innerHTML = JSON.stringify(array2)
}




