function moveInArray(arr) {
    let arrSize = Number(arr.shift());
    //let newArr =[];
    //newArr.length=arrSize;
    let newArr = new Array(arrSize).fill(0);

    for (let element of arr) {
        let separated = element.split(" - ");
        let index = separated[0];
        let value = separated[1];
        newArr[index]=value;
    }
        console.log(newArr);
}
moveInArray(["3","0 - 5", "0 - 6", "0 - 7"])