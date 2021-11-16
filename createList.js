// const people = [{
//     id:1,
//     name:"Joe",
//     excludes:[1]
// },{
//     id:2,
//     name:"Arra",
//     excludes:[2]
// },{
//     id:3,
//     name:"Gayle",
//     excludes:[3]
// }];
// let currId=4;
const people = [];
let currId = 0
const addNamesDiv= document.querySelector(".addNames")
const excludeDiv= document.querySelector(".exclude")
const resultsDiv= document.querySelector(".results")
const nameForm = document.querySelector("#addNameForm");
const namesUl=document.querySelector("#names");
const toExcludeBtn = document.querySelector("#toExclude") 

const showNames = ()=>{
    namesUl.innerHTML = "";
    people.forEach(person=>{
        const newLi= document.createElement(`li`)
        console.log(person)
        newLi.innerHTML = `
          ${person.name} <button class="delBtn" data-id=${person.id}>delete</button>
        `
        namesUl.append(newLi)
    })
}

nameForm.addEventListener("submit",e=>{
    e.preventDefault();
    const newPerson = {
        id:currId,
        name:nameForm.querySelector("input[type=text]").value,
        exclude:[currId]
    }
    currId++;
    nameForm.querySelector("input[type=text]").value = ""
    people.push(newPerson);
    console.log(people);
    showNames();

})

namesUl.addEventListener("click",e=>{
    if(e.target.matches("button.delBtn")){
        people.splice(people.findIndex(({id})=>id=== +e.target.getAttribute("data-id")),1)
        showNames()
    }
})

showNames();