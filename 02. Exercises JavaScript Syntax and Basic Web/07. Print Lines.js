function printLines(lines) {
    for(let i = 0; i < lines.length; i++){
        if(lines[i] === 'Stop'){
            break;
        }else{
            console.log(lines[i]);
        }
    }
}

printLines(['Line 1','Line 2', 'Line 3', 'Stop', '10', '12']);