function storingObjects(input) {
    let obj = {};

    for(let i = 0; i < input.length; i++){
        let arrInput = input[i].split(' -> ');
        obj.Name = arrInput[0];
        obj.Age = Number(arrInput[1]);
        obj.Grade = arrInput[2];
        for(let st in obj){
            console.log(`${st}: ${obj[st]}`);
        }
    }
}

storingObjects(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57']);
