function printNumsInReversedOrder(numsInStr) {
    let num = numsInStr.map(Number).reverse();
    for(let n of num){
        console.log(n);
    }
}

printNumsInReversedOrder(['10', '20', '30']);