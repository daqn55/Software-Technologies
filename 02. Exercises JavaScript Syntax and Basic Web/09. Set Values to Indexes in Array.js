function setValuesToIndexes(input) {
    let arr = [];

    for(let i = 0; i < input[0]; i++){
        arr[i] = 0;
    }

    for(let i = 1; i < input.length; i++){
        if(input[i] != undefined){
            let indexAndNum = input[i].split(" - ");
            arr[Number(indexAndNum[0])] = Number(indexAndNum[1]);
        }
    }

    for(let n of arr){
        console.log(n);
    }
}

setValuesToIndexes(['2', '0 - 5', '0 - 6', '0 - 7']);