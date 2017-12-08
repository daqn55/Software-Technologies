function productOfNumbers(nums) {
    let count = 0;
    let isZero = false;
    for (let i = 0; i < nums.length; i++){
        if(Number(nums[i]) < 0){
            count++;
        }
        if(Number(nums[i]) === 0){
            isZero = true;
        }
    }
    if(count === 1 && !isZero){
        console.log("Negative")
    }else{
        console.log("Positive")
    }
}

productOfNumbers(['2', '-3', '-3'])