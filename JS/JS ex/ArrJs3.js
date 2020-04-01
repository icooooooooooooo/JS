function arrSum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=Number(element);        
    }
    return sum;
}
arrSum(['11','22']);