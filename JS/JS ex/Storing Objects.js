function storingObj(arr) {
    let objectList = [];

    for (let line of arr) {
        let temp = line.split(" -> ");
        let name = temp[0];        
        let age = Number(temp[1]);        
        let grade = Number(temp[2]);
        
        let userInfo = {};
        userInfo["name"] = name;
        userInfo["age"] = age;
        userInfo["grade"] = grade;

        objectList.push(userInfo);
    }
    for (const object of objectList) {
        console.log(`Name: ${object.name}`);
        console.log(`Age: ${object.age}`);
        console.log(`Grade: ${object.grade}`);
    }
}
storingObj([
"Pesho -> 13 -> 6.00",
"Ivan -> 12 -> 5.57",
"Toni -> 13 -> 4.90"
])