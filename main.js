const mobileForm = document.querySelector(".mobile-form ")
const nameInput = document.querySelector(" .nameinput")
const priceInput = document.querySelector(" .priceinput ")
const formButton = document.querySelector("button")
const tBody = document.querySelector(" tbody ")





let updateIndex = null
const mobiles = [{
    name : "oppo",
    price : 20000,
}
]
function HandelSubmit() {
    const mobile = {
        name :nameInput.value,
        price :priceInput.value,
    }
    if(nameInput.value.length > 0 && priceInput.value.length > 0 ){
        if(formButton.textContent === "Create"){
            mobiles.push(mobile);

        } else {
            mobiles.splice(updateIndex ,1,mobile);
            formButton.textContent = "Create";
        }
        display();
        clearInput();
}
}
mobileForm.addEventListener("submit" ,(e) => {
    e.preventDefault()
    HandelSubmit()

})

function display() {
tBody.innerHTML = " "
mobiles.forEach((mobile , index ) => {
tBody.innerHTML += `
 <tr>
         <td>${index + 1}</td>
           <td>${mobile.name}</td>
             <td>${mobile.price}</td>
               <td>
                <i onclick = getData(${index})
                 class="fa-solid fa-pen-to-square"></i>
                <i onclick = deletMobile(${index}) class="fa-solid fa-trash"></i>
            </td>
       </tr>
`
})    
}
display();

function clearInput() {

    nameInput.value = "";
    priceInput.value = "";
}

function deletMobile (mobileIndex) {
    mobiles.splice(mobileIndex,1);
    display();
    
}

function getData(mobileIndex) {
    const mobile = mobiles[mobileIndex]
    nameInput.value = mobile.name
     priceInput.value = mobile.price

formButton.textContent = "Update"

updateIndex = mobileIndex;

    
}



