function MultiplyTwoNumbers(arr) {
    let result;
    for (let index = 0; index < arr.length; index++) {
        if(index===0){
            result = arr[0];
        } else {
            result*=arr[index];
        }
    }
    console.log(result);
}
MultiplyTwoNumbers(['2','3','5','88'])