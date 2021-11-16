const generateSantas = people=>{
    const peeps=[...people];
    const shuffledPeeps = shuffle(peeps);
    const result = [];
    people.forEach(person=>{
        let giftFor= false;
        let compIdx=0;
        while (!giftFor&&compIdx<shuffledPeeps.length){
            if(!person.exclude.includes(shuffledPeeps[compIdx].id)){
                giftFor= shuffledPeeps[compIdx];
                shuffledPeeps.splice(compIdx,1)
            } else {
                compIdx++
            }
        }
        result.push({
            santa:person.name,
            for:giftFor.name
        })
    })
    return result.every(obj=>obj.for) ? result: generateSantas(people)
    
}

const shuffle = arr=>{
    const arrCopy = [...arr]
    const shuffled = [];
    while(shuffled.length<arr.length){
        const randomIdx = Math.floor(Math.random()*arrCopy.length);
        shuffled.push(arrCopy[randomIdx]);
        arrCopy.splice(randomIdx,1);
    }
    return shuffled
}
