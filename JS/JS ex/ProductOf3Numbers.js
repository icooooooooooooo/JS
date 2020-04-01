function ProductOf3(arr) {
    let negCount = 0;
    //Boolean isZero = false;
    //not sure how to use bool in JS;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])<0) {
            negCount++;
        } else if(Number(arr[i])===0){
            //console.log("Positive, as one member is 0");
            break;
        } 
    }
    if (negCount%2!=0){
        console.log("Negative");        
    } else{
        console.log("Positive");
    }

}
ProductOf3(['6','3','-1'])