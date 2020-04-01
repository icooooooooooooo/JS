function objectify(arr) {
    let obj ={};
    for (let element of arr) {
        let input = element.split(" -> ")
        let temp = input[1]; 
        let value = isFinite(input[1]) ? Number(input[1]) : input[1];
        
        obj[input[0]] = value;
    }

    console.log(obj);
}
objectify([
"name -> Angel",
"surname -> Georgiev",
"age -> 20",
"grade -> 6.00",
"date -> 23/05/1995",
"town -> Sofia"
])