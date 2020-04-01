function KVP(arr) {
    let key = arr.pop();
    let pair = {};

    for (let element of arr) {
        let split = element.split(" ");
        let key = split[0];
        let value = split[1];
        
        pair[key]=value;
    }

    if (pair.hasOwnProperty(key)) {
        console.log(pair[key])
    } else {
        console.log("None")        
    }
}
KVP([
    "3 test" ,
    "3 test1" ,
    "4 test2" ,
    "4 test3" ,
    "4 test5" ,
    "4"
])