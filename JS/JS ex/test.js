let objects = arr.map(JSON.parse);
    //the idea here is to transforma an array of strings to anarray of objects
    let sums = {}; 
    console.log(objects);
    for (let obj of objects) {
        if (obj.town in sums) {
            sums[obj.town] += obj.income;
        } else {
        sums[obj.town]=obj.income;
        }
    }
    let towns = Object.keys(sums);
    for (let town of towns) {
        console.log(`${town} -> ${sums[town]}`);
    }
townInc(["{\"town\":\"Sofia\",\"income\":200}","{\town\":\"Varna\",\"income\":120}","{\"town\":\"Pleven\",\"income\":60}","{\"town\":\"Varna\",\"income\":70}"]);