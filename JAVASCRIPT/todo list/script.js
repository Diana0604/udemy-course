function listTodos(list){
    console.log("***********")
    list.forEach(function(todo, index){
        console.log(index + ": " + todo);
    });
    console.log("***********")
}

function startList() {
    var list = [];
    while(true){
        var action = prompt("what would you like to do?");
        if(action === "new"){
            list.push(prompt("What new element would you like to add?"));
            continue;
        }
        if(action === "delete"){
            var index = Number(prompt("Tell me the index you have completed"));
            list.splice(index, 1);
            continue;
        }
        if(action === "list"){
            listTodos(list);
            continue;
        }
        if(action === "quit"){
            break;
        }
        alert("YOU ENTERED AN INVALID COMMAND!");
    }
}

