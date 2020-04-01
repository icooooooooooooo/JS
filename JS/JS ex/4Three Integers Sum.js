function sumOf3(arr) {
    let output = arr.split(' ');
    let a = Number(output[0]);
    let b = Number(output[1]);
    let c = Number(output[2]);

    let result;
    output.forEach(element => {
        console.log(element);
    });
    if (a + b == c) {
        console.log(`${Math.min(a, b)} + ${Math.max(a, b)} = ${c}`);
    } else if (a + c == b) {
        console.log(`${Math.min(a, c)} + ${Math.max(a, c)} = ${b}`);
    } else if (b + c == a) {
        console.log(`${Math.min(c, b)} + ${Math.max(c, b)} = ${a}`);
    } else {
        console.log('No')
    }
}
sumOf3('8 7 15')