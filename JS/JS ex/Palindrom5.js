function palindrom(params) {
    let num = Number(params);

    for (let index = 1; index <= num; index++) {

        let reversedNum="";
        let originalNum = index+'';
        for (let position = originalNum.length-1; position>=0 ; position--) {
            reversedNum+=(originalNum[position]);
        }
        if(originalNum==reversedNum){
            console.log(originalNum);
        }
    }
}

palindrom(56);