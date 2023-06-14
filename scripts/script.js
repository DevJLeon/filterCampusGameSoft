const $registerData = document.querySelector("#registerData");
const $loginData = document.querySelector("#loginData");
const $registerButton = document.querySelector("#register");
const $signinButton = document.querySelector("#signin");

var customersList = [];

function createTD (){
  console.log("Hola mundo")
};

// MAIN TABLE
const $customersTable = document.querySelector(".cx-table");


// **************** Creating Customers ****************

$registerButton.addEventListener("click", function (){
  //register customers
  //const $formTitle = $form.title.value;

  const name = $registerData.name.value;
  const lastname = $registerData.lastname.value;
  const ID = $registerData.id.value;
  const phone = $registerData.phone.value;
  const BDay = $registerData.birthday.value;
  const nationality = $registerData.nationality.value;
  const email = $registerData.registerMail.value;
  const password = $registerData.registerPassword.value;

  let customer = {
    name:name,
    lastname:lastname,
    id:ID,
    phone:phone,
    bday:BDay,
    nationality:nationality,
    email:email,
    password:password,
    loyalty:0
  };
  customersList.push(customer)

  const $tableRow =document.createElement("tr");
  const $tableID =document.createElement("th");
  const $tableName =document.createElement("td");
  const $tableLastname =document.createElement("td");
  const $tableEmail =document.createElement("td");
  const $tablePhone =document.createElement("td");
  const $tableBDay =document.createElement("td");
  const $tableNation =document.createElement("td");
  const $tableButtons =document.createElement("td");

  $tableName.setAttribute("class","cap");
  $tableLastname.setAttribute("class","cap");
  $tableNation.setAttribute("class","cap");

  $tableID.innerHTML=(customer.id);
  $tableName.innerHTML=(customer.name);
  $tableLastname.innerHTML=(customer.lastname);
  $tableEmail.innerHTML=(customer.email);
  $tablePhone.innerHTML=(customer.phone);
  $tableBDay.innerHTML=(customer.bday);
  $tableNation.innerHTML=(customer.nationality);
  $tableButtons.innerHTML=(`<button type="button" class="func-btn edit-btn btn btn-light"><i class="bi bi-pencil"></i>
  </button>
  <button type="button" class="func-btn delete-btn btn btn-light"><i class="bi bi-trash"></i>
  </button>`);

  $tableRow.appendChild($tableID);
  $tableRow.appendChild($tableName);
  $tableRow.appendChild($tableLastname);
  $tableRow.appendChild($tableEmail);
  $tableRow.appendChild($tablePhone);
  $tableRow.appendChild($tableBDay);
  $tableRow.appendChild($tableNation);
  $tableRow.appendChild($tableButtons);
  console.log($tableRow);

  $customersTable.appendChild($tableRow);
  
  localStorage.setItem("customers",JSON.stringify(customersList));
});

document.addEventListener("DOMContentLoaded", ()=>{
  customersList = JSON.parse(localStorage.getItem("customers"))
  if(customersList==null){
    customersList = []
  };

  customersList.forEach(element => {
    const $tableRow =document.createElement("tr");
    const $tableID =document.createElement("th");
    const $tableName =document.createElement("td");
    const $tableLastname =document.createElement("td");
    const $tableEmail =document.createElement("td");
    const $tablePhone =document.createElement("td");
    const $tableBDay =document.createElement("td");
    const $tableNation =document.createElement("td");
    const $tableButtons =document.createElement("td");

    $tableName.setAttribute("class","cap");
    $tableLastname.setAttribute("class","cap");
    $tableNation.setAttribute("class","cap");
  
    $tableID.innerHTML=(element.id);
    $tableName.innerHTML=(element.name);
    $tableLastname.innerHTML=(element.lastname);
    $tableEmail.innerHTML=(element.email);
    $tablePhone.innerHTML=(element.phone);
    $tableBDay.innerHTML=(element.bday);
    $tableNation.innerHTML=(element.nationality);
    $tableButtons.innerHTML=(`<button type="button" class="func-btn edit-btn btn btn-light" data-bs-toggle="modal" data-bs-target="#editButton"><i class="bi bi-pencil"></i>
    </button>
    <button type="button" class="func-btn delete-btn btn btn-light"><i class="bi bi-trash"></i>
    </button>`);
  
    $tableRow.appendChild($tableID);
    $tableRow.appendChild($tableName);
    $tableRow.appendChild($tableLastname);
    $tableRow.appendChild($tableEmail);
    $tableRow.appendChild($tablePhone);
    $tableRow.appendChild($tableBDay);
    $tableRow.appendChild($tableNation);
    $tableRow.appendChild($tableButtons);
    console.log($tableRow);
  
    $customersTable.appendChild($tableRow);
  });
})

//-const $deleteBtn =document.getElementby("delete-btn")

/*document.getElementByTagName("button").addEventListener("click", () =>{
  console.log("estamos progresando")
})
*/

//const equisde = ["uno","dos","tres"];

//equisde.forEach(element => {
//  console.log(element)
//});
