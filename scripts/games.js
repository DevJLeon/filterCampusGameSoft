const $addGameBTN = document.querySelector("#addOneGame");
const $addGameForm = document.querySelector("#addGameForm");
const $cards = document.querySelector(".cards-row");

let gamesList =[];

$addGameBTN.addEventListener("click",function(){
  const img = $addGameForm.gameImg.value;
  const ID = $addGameForm.gameID.value;
  const name = $addGameForm.gameName.value;
  const genre = $addGameForm.gameGenre.value;
  const price = $addGameForm.gamePrice.value;
  const loyalty = $addGameForm.gameLoyalty.value;

  let game = {
    img:img,
    id:ID,
    name:name,
    genre:genre,
    price:price,
    loyalty:parseInt(price)
  }

  gamesList.push(game);
  console.log(gamesList);

  //  const $tableRow =document.createElement("tr");

  const $card = document.createElement("div");
  const $gameIMG = document.createElement("img")
  const $ul = document.createElement("ul");
  const $buyBtn = document.createElement("div")
  
  $card.setAttribute("class","card col-4");
  $card.setAttribute("style","width: 18rem");

  $gameIMG.setAttribute("src",game.img);
  $gameIMG.setAttribute("class","card-img-top");

  $ul.setAttribute("class","list-group list-group-flush")
  $ul.innerHTML=`
  <li class="list-group-item">ID: <span>${game.id}</span></li>
  <li class="list-group-item">Name:<span>${game.name}</span></li>
  <li class="list-group-item">Genre:<span>${game.genre}</span></li>
  <li class="list-group-item">Price:<span>$ ${game.price} USD</span></li>
  <li class="list-group-item">Loyalty:<span>${game.loyalty}p</span></li>`

  $buyBtn.setAttribute("class","card-body buyButton");
  $buyBtn.innerHTML=`
  <button type="button" class="btn btn-outline-primary buy-btn">
  <i class="bi bi-bag-fill""> Buy</i>
  `
  
  $card.appendChild($gameIMG);
  $card.appendChild($ul);
  $card.appendChild($buyBtn);


  $cards.appendChild($card)
  // SAVING ON LOCALSTORAGE

  localStorage.setItem("games",JSON.stringify(gamesList));
});


document.addEventListener("DOMContentLoaded", ()=>{
  gamesList = JSON.parse(localStorage.getItem("games"))
  if(gamesList==null){
    gamesList = []
  };

  gamesList.forEach(element => {
    const $card = document.createElement("div");
    const $gameIMG = document.createElement("img")
    const $ul = document.createElement("ul");
    const $buyBtn = document.createElement("div")
    
    $card.setAttribute("class","card col-4");
    $card.setAttribute("style","width: 18rem");
  
    $gameIMG.setAttribute("src",element.img);
    $gameIMG.setAttribute("class","card-img-top");
  
    $ul.setAttribute("class","list-group list-group-flush")
    $ul.innerHTML=`
    <li class="list-group-item">ID: <span>${element.id}</span></li>
    <li class="list-group-item">Name:<span>${element.name}</span></li>
    <li class="list-group-item">Genre:<span>${element.genre}</span></li>
    <li class="list-group-item">Price:<span>$ ${element.price} USD</span></li>
    <li class="list-group-item">Loyalty:<span>${element.loyalty}p</span></li>`
  
    $buyBtn.setAttribute("class","card-body buyButton");
    $buyBtn.innerHTML=`
    <button type="button" class="btn btn-outline-primary buy-btn">
    <i class="bi bi-bag-fill""> Buy</i>
    `
    
    $card.appendChild($gameIMG);
    $card.appendChild($ul);
    $card.appendChild($buyBtn);
  
  
    $cards.appendChild($card)
  });
});