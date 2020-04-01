function MultiplyOrDivide(arr) {
    let a = Number(arr[0]);
    let b = Number(arr[1]);

    if (a>b){
        console.log(a/b);
    }else{
        console.log(a*b);
        
    }
}
MultiplyOrDivide(['12','12'])