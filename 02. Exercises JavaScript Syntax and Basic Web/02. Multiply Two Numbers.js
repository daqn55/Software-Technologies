function multiplyTwoNumbers(nums) {
    let n = Number(nums[0]);
    let x = Number(nums[1]);
    if(x >= n){
        console.log(x * n);
    }else{
        console.log(n / x);
    }
}

multiplyTwoNumbers(['12', '-12']);