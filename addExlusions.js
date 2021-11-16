const excludeForm = document.querySelector("#excludeForm")

toExcludeBtn.addEventListener("click",e=>{
    addNamesDiv.setAttribute("class","addNames hide")
    excludeDiv.setAttribute("class","exclude show")
    showExclusions(people)
})

const showExclusions = arr=>{
    [...arr].reverse().forEach(person=>{
        const personDiv = document.createElement(`div`);
        personDiv.setAttribute("class", "personCheckboxGroup");
        personDiv.innerHTML += `<h3>${person.name}</h3>`;
        arr.forEach(peep=>{
            personDiv.innerHTML+= `<label for="${person.id}-${peep.id}">${peep.name}</label><input type="checkbox" id="${person.id}-${peep.id}" name=${person.id} value=${peep.id} ${person.id===peep.id?"checked":""}><br>`
        })
        excludeForm.prepend(personDiv)
    })
}

const showResults = arr=>{
    arr.forEach(santa=>{
        console.log(santa);
        const newSanta = document.createElement("h2");
        newSanta.textContent = `Santa ${santa.santa} for ${santa.for}`;
        console.log(newSanta)
        resultsDiv.append(newSanta)
    })
}

excludeForm.addEventListener("submit",e=>{
    e.preventDefault();
    people.forEach(person=>{
        const myExcludes = document.querySelectorAll(`input[name="${person.id}"]:checked`)
        const excludesId =[] 
        myExcludes.forEach(el=>excludesId.push(+el.value))
        person.exclude = excludesId;
    })
    resultsDiv.setAttribute("class","results show")
    excludeDiv.setAttribute("class","exclude hide")
    const results = generateSantas(people);
    showResults(results);
})
