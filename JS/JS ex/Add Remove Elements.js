function addRemove(arr) {
let newArr = new Array().fill(0);
    for (let pair of arr) {
        let comPair = pair.split(" ");
        if (comPair[0] === "add"){
            newArr.push(comPair[1]);
        } else if(comPair[0]==="remove"){
            newArr.splice(Number(comPair[1]),1);
        }
    }    
    console.log(newArr);
}
addRemove([
"add 3",
"add 5",
"remove 2",
"remove 0",
"add 7"
])