import { GetData} from "./function.js";

let result = document.getElementById("result");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let id = document.getElementById("id");
let age = document.getElementById("age");
let height = document.getElementById("height");
const pagination_element = document.getElementById('pagination');
let ten = document.getElementById("ten");
let twenty = document.getElementById("twenty");
let thirty = document.getElementById("thirty");
let fourty = document.getElementById("fourty");
let fifty = document.getElementById("fifty");

let arrayData = [];
arrayData = await GetData();
let arrayDataFirstName = arrayData;
let arrayDataLastName = arrayData;
let arrayDataEmail = arrayData;
let arrayDataId = arrayData;
let arrayDataAge = arrayData;
let arrayDataHeight = arrayData;

let i = 0


firstName.addEventListener("click", function(){
    arrayDataFirstName.People.sort((a, b) => {
        const nameA = a.FirstName;
        const nameB = b.FirstName;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    CreateElements(arrayDataFirstName);
})

lastName.addEventListener("click", function(){
    arrayDataLastName.People.sort((a, b) => {
        const nameA = a.LastName;
        const nameB = b.LastName;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    CreateElements(arrayDataLastName);
})

email.addEventListener("click", function(){
    arrayDataEmail.People.sort((a, b) => {
        const nameA = a.Email;
        const nameB = b.Email;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    CreateElements(arrayDataEmail);
})

id.addEventListener("click", function(){
    arrayDataId.People.sort((a, b) => {
        const idA = a.Id;
        const idB = b.Id;
        if (idA < idB) return -1;
        if (idA > idB) return 1;
        return 0;
    });
    CreateElements(arrayDataId);
})

age.addEventListener("click", function(){
    arrayDataAge.People.sort((a, b) => {
        const idA = a.Age;
        const idB = b.Age;
        if (idA < idB) return -1;
        if (idA > idB) return 1;
        return 0;
    });
    CreateElements(arrayDataAge);
})

height.addEventListener("click", function(){
    arrayDataHeight.People.sort((a, b) => {
        const idA = a.Height;
        const idB = b.Height;
        if (idA < idB) return -1;
        if (idA > idB) return 1;
        return 0;
    });
    CreateElements(arrayDataHeight);
})


function CreateElements(name){
    result.innerHTML = "";
    console.log(name);
    let peopleArray = name.People;
    console.log(peopleArray);
    i = 0;

        peopleArray.map(person => {
            let nameRow = document.createElement('row')
            nameRow.className = "nameRow";

            let p = document.createElement('p');
            p.textContent = person.FirstName;
            p.className = "textCreate";

            let p2 = document.createElement('p');
            p2.textContent = person.LastName;
            p2.className = "textCreate";

            let p3 = document.createElement('p');
            p3.textContent = "Id : " + person.Id;
            p3.className = "textCreate";

            let p4 = document.createElement('p');
            p4.textContent = person.Email;
            p4.className = "textCreate";

            let p5 = document.createElement('p');
            p5.textContent = "Height : " + person.Height;
            p5.className = "textCreate";

            let p6 = document.createElement('p');
            p6.textContent = "Age : " + person.Age;
            p6.className = "textCreate";
            
    
            // let deleteBtn = document.createElement('button');
            // deleteBtn.className = 'buttonDelete';
            // deleteBtn.type = 'button';
            // deleteBtn.textContent = "Delete"
            // deleteBtn.addEventListener("click", function(){
            //     result.removeChild(nameRow);
            //     nameRow.removeChild(p);
            //     nameRow.removeChild(p2);
            //     nameRow.removeChild(p3);
            //     nameRow.removeChild(p4);
            //     nameRow.removeChild(p5);
            //     nameRow.removeChild(p6);
            //     nameRow.removeChild(deleteBtn);
            //     RemoveFromList(person, peopleArray);
            //     CreateElements();
            // })

            result.appendChild(nameRow);
            nameRow.appendChild(p);
            nameRow.appendChild(p2);
            nameRow.appendChild(p3);
            nameRow.appendChild(p4);
            nameRow.appendChild(p5);
            nameRow.appendChild(p6);
            // nameRow.appendChild(deleteBtn);

            i++;
        })

}

function RemoveFromList(name, arrayPass){

    console.log(name);

    let nameIndex = arrayPass.indexOf(name);

    arrayPass.splice(nameIndex, 1);

    console.log(arrayPass);


}

function CreateElements2(name, pageNum, pageSize){
    result.innerHTML = "";
    console.log(name);
    let peopleArray = name.People;
    console.log(peopleArray);
    i = 0;

    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentItems = peopleArray.slice(startIndex, endIndex);

    const pageCount = Math.ceil(peopleArray.length / pageSize);

    let rowBtns = document.createElement("row");
    rowBtns.className = "rowBtns";
    result.appendChild(rowBtns);

    for(let j = 1; j <= pageCount; j++){
        const pageBtn = document.createElement('button');
        pageBtn.textContent = j;
        pageBtn.className = "pageBtn";
        pageBtn.addEventListener("click", function(){
            CreateElements2(name, j, pageSize);
        });
        if(j === pageNum){
            pageBtn.className = "pageBtn active";
        }
        rowBtns.appendChild(pageBtn);
    }

    currentItems.map(person => {
        let nameRow = document.createElement('row')
        nameRow.className = "nameRow";

        let p = document.createElement('p');
        p.textContent = person.FirstName;
        p.className = "textCreate";

        let p2 = document.createElement('p');
        p2.textContent = person.LastName;
        p2.className = "textCreate";

        let p3 = document.createElement('p');
        p3.textContent = "Id : " + person.Id;
        p3.className = "textCreate";

        let p4 = document.createElement('p');
        p4.textContent = person.Email;
        p4.className = "textCreate";

        let p5 = document.createElement('p');
        p5.textContent = "Height : " + person.Height;
        p5.className = "textCreate";

        let p6 = document.createElement('p');
        p6.textContent = "Age : " + person.Age;
        p6.className = "textCreate";
        

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'buttonDelete';
        deleteBtn.type = 'button';
        deleteBtn.textContent = "Delete"
        // deleteBtn.addEventListener("click", function(){
        //     result.removeChild(nameRow);
        //     nameRow.removeChild(p);
        //     nameRow.removeChild(p2);
        //     nameRow.removeChild(p3);
        //     nameRow.removeChild(p4);
        //     nameRow.removeChild(p5);
        //     nameRow.removeChild(p6);
        //     nameRow.removeChild(deleteBtn);
        //     RemoveFromList(person, peopleArray);
        //     CreateElements();
        // })

        result.appendChild(nameRow);
        nameRow.appendChild(p);
        nameRow.appendChild(p2);
        nameRow.appendChild(p3);
        nameRow.appendChild(p4);
        nameRow.appendChild(p5);
        nameRow.appendChild(p6);
        // nameRow.appendChild(deleteBtn);

        i++;
    });

    // Add pagination buttons


}

CreateElements(arrayData);

  ten.addEventListener("click", function(){
    CreateElements2(arrayData, 1, 10)
  })

  twenty.addEventListener("click", function(){
    CreateElements2(arrayData, 1, 20)
  })

  thirty.addEventListener("click", function(){
    CreateElements2(arrayData, 1, 30)
  })

  fourty.addEventListener("click", function(){
    CreateElements2(arrayData, 1, 40)
  })

  fifty.addEventListener("click", function(){
    CreateElements2(arrayData, 1, 50);
  })