function AddingAdditionalValueToKVP(arr) {
    let key = arr.pop();
    let listKVP =new Map();

    for (let element of arr) {
        let group = element.split(' ');
        let key = group[0];
        let value = group[1];

        if (!listKVP.has(key)) {
            listKVP.set(key,[]);
        } 
        listKVP.get(key).push(value)
    }

    if (listKVP.has(key)) {        
        console.log(listKVP.get(key).join('\n'));
    } else {
        console.log("None");
        
    }
}
AddingAdditionalValueToKVP([
"3 test",
"3 test1" ,
"4 test2" ,
"4 test3" ,
"4 test5",
"4"
])