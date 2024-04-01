let ToDoList = () => {

    // registration form ma char value assign karva mate
    let Name  = document.getElementById("name").value;
    let Task = document.getElementById("text").value;
    let Priority = document.getElementById("quality").value;
    let Date = document.getElementById("Dob").value;

    // first "get" ma data store karvo padse and data leva mate
    let storage  = JSON.parse(sessionStorage.getItem("item"))

     // jo data lesu to null hase to "emty array" ma jase
    if(storage == null){
        storage = [];
    }
    // object array create karyo
    storage.push({
        Name : Name,
        Task : Task,
        Priority : Priority,
        Date : Date,
    })
    // kam karva mate
    sessionStorage.setItem("item", JSON.stringify(storage));
     
    // kam karine data pachho get ma store karva mate
    console.log(JSON.parse(sessionStorage.getItem("item")));

    let x = document.getElementById("man");

    //double record Aave tyare double record remove karva mate

    while(x.firstChild){
        x.removeChild(x.firstChild);
    }
//  
    storage.forEach ((item) => {
        let num = document.createElement("tr")

        let num1 = document.createElement("td")
        let num2 = document.createElement("td")
        let num3 = document.createElement("td")
        let num4 = document.createElement("td")

        // innerHTML means ke table row ni andar  table data (td) ma nakhva mate
        num1.innerHTML = item.Name
        num2.innerHTML = item.Task
        num3.innerHTML = item.Priority
        num4.innerHTML = item.Date

        // appendchild means ke table row(tr) ma nakhva mate
        num.appendChild(num1);
        num.appendChild(num2);
        num.appendChild(num3);
        num.appendChild(num4);


        x.appendChild(num);

    })


}

