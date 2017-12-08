function workingWithKeyValue(input) {
    let obj = {};

    for(let i = 0; i < input.length; i++) {
        let arrInput = input[i].split(' ');
        if (arrInput.length === 1) {
            break;
        }
        if([arrInput[0]] in obj){
            obj[arrInput[0]].push(arrInput[1]);
        }else {
            obj[arrInput[0]] = [arrInput[1]];
        }
    }
    let lastCommand = input[input.length-1];
    if(obj[lastCommand] === undefined){
        console.log("None");
    }else {
        for(let val of obj[lastCommand]){
            console.log(val);
        }
    }
}

workingWithKeyValue(['key value', 'key eulav', 'test tset', 'key']);
