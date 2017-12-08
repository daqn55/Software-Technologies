function workingWithKeyValue(input) {
    let obj = {};

    for(let i = 0; i < input.length; i++) {
        let arrInput = input[i].split(' ');
        if (arrInput.length === 1) {
            break;
        }
        obj[arrInput[0]] = arrInput[1];
    }
    let lastCommand = input[input.length-1];
    if(obj[lastCommand] === undefined){
        console.log("None");
    }else {
        console.log(obj[lastCommand]);
    }
}

workingWithKeyValue(['key value', 'key eulav', 'test tset', 'keddy']);
