function addRemoveElements(commands) {
    let arr = [];
    for(let i = 0; i < commands.length; i++){
        let commandElement = commands[i].split(' ');
        if(commandElement[0] === 'add'){
            arr.push(Number(commandElement[1]));
        }else if(commandElement[0] === 'remove'){
            let removedElement = arr.splice(Number(commandElement[1]), 1);
        }
    }
    for(let n of arr){
        console.log(n);
    }
}

addRemoveElements(['add 3', 'add 5', 'remove 2', 'add 2']);