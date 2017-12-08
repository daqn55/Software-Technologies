function turnObjIntoJsonStr(input) {
    let obj = {};

    for(let i = 0; i < input.length; i++){
        let arrInput = input[i].split(' -> ');
        if(Number.isInteger(Number(arrInput[1]))){
            obj[arrInput[0]] = Number(arrInput[1]);
        }else{
            obj[arrInput[0]] = arrInput[1];
        }
    }
    let str = JSON.stringify(obj);
    console.log(str);
}

turnObjIntoJsonStr(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
