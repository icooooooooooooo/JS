function parseObject(arr) {
    let objectList = [];

    for (let element of arr) {
        let object = JSON.parse(element);
        objectList.push(object);
    }
    for (let userInfo of objectList) {
        console.log(`Name: ${userInfo.name}`);
        console.log(`Age: ${userInfo.age}`);
        console.log(`Date: ${userInfo.date}`);
    }
}
parseObject([
"{\"name\":\"Gosho\",\"age\":10,\"date\":\"19/06/2005\"}",
"{\"name\":\"Tosho\",\"age\":11,\"date\":\"04/04/2005\"}"
])