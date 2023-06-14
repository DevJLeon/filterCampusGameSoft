const $cardContainer =document.querySelector(".cards-row");


document.addEventListener("DOMContentLoaded", ()=>{
  customersList = JSON.parse(localStorage.getItem("customers"))
  if(customersList==null){
    customersList = []
  };

  customersList.forEach(element => {
    const $card =document.createElement("div");
    const $h3 =document.createElement("h3");
    const $h1 =document.createElement("h1");
    const $ul =document.createElement("ul");
    const $li1 =document.createElement("li");
    const $li2 =document.createElement("li");
    const $li3 =document.createElement("li");
    const $li4 =document.createElement("li");

    $card.setAttribute("class","card col-4");
    $card.setAttribute("style","width: 18rem");

    $ul.setAttribute("class","list-group list-group-flush");

    $li1.setAttribute("class","list-group-item");
    $li2.setAttribute("class","list-group-item");
    $li3.setAttribute("class","list-group-item");
    $li4.setAttribute("class","list-group-item");

    $h3.innerHTML=("Loyalty Points");
    $h1.innerHTML=(element.loyalty);
    $li1.innerHTML=(`Name: <span>${element.name}</span>`);
    $li2.innerHTML=(`Lastname: <span>${element.lastname}</span>`);
    $li3.innerHTML=(`ID: <span>${element.id}</span>`);
    $li4.innerHTML=(`Name: <span>${element.email}</span>`);
  
    $ul.appendChild($li1);
    $ul.appendChild($li2);
    $ul.appendChild($li3);
    $ul.appendChild($li4);

    $card.appendChild($h3);
    $card.appendChild($h1);
    $card.appendChild($ul);
  
    $cardContainer.appendChild($card);
  });
})