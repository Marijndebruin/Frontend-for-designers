// JavaScript Document
console.log("Who let the dogs out?");

// Oude manier van fotos in laden.
var dogImages = [
    "Floor.png",
    "Floor2.png",
    "Maxi.png",
    "Millou.png",
    "cursedFloor.png"
    ]
    
// Leuke honden namen!
// Maxi en Millou RIP <3
var dogNames = [
    "Maxi",
    "Floor",
    "Millou",
    "Sarah",
    "Daisy",
    "Jack",
    "Goofy",
    "Boris",
    "Alaska",
    "Andor",
    "Wolf",
]

var users = [
    "Marijn",
    "Yonna",
    "Mart",
    "Marcel",
    "Daphne",
    "Boris",
    "Ruben",
    "Bob",
    "IHaveTheHighGround",
    "R2D2",
    "Elisa",
    "Bart",
    "MarijnIsCool",
    "DoggyLover2",
    "Polly",
    "Anne21",
    "TheChosenOne",
    "MarijnWasTaken",
    "NoobSlayer2000",
    "EenNaam",
    "DitIsEen10Waard",
    "KoffieLover84",
]

// De app start met 0, je hebt nog 0 honden bekeken
// Hier komt telkens 1 bij als je een hond bekijkt.
// Hoeveel honden heb jij bekeken?
var count = 0;

var noButton = document.getElementById("no");
var yesButton = document.getElementById("yes");

// De buttons voor de app beide buttons hebben een andere functie.
noButton.addEventListener("click",newDogNo);
yesButton.addEventListener("click",newDogLike);

// Favo lijst openen en dicht doen

var menuButton = document.getElementById("favo")
var menuSection = document.getElementById("menuSection")

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	menuSection.classList.toggle("menuOpen");
}


// Opslaan in favo

const favoH2 = document.getElementById("dogName")
const favoH3 = document.getElementById("username")
const favoImage = document.getElementById("dogImage")

const favoLijst = document.getElementById("favoLijst")

yesButton.addEventListener("click", voegTekstToeAanLijst);

function voegTekstToeAanLijst() {
	var cloneH2 = favoH2.cloneNode(true);
    var cloneH3 = favoH3.cloneNode(true);
    var cloneImage = favoImage.cloneNode(true);

	var deNieuweLi = document.createElement("li");
	
	deNieuweLi.appendChild(cloneH2);
    deNieuweLi.appendChild(cloneH3);
    deNieuweLi.appendChild(cloneImage);
	
	favoLijst.appendChild(deNieuweLi);
}



function newDog(){
    getRandomImage();
    randomName();
    // randomPicture();
    randomUser();
}


function newDogLike(){
    animatieLike();
    newDog();
    plusOne();
}

function newDogNo(){
    animatieNo();
    newDog();
}


// De plus 1 functie, telt telkens 1 er bij als je een hond liked.
function plusOne (){
    count ++;
    console.log(count)
    document.getElementById("watchDogs").innerHTML = "Liked honden: " + count;
}

// functie om de NO animatie te starten en daarna te verwijderen.
function animatieNo(){
    document.getElementById("article").className = 'animatieNo';
    document.getElementById("buttonNo").disabled = true;
    article.addEventListener('animationend', () => {
        document.getElementById("buttonNo").removeAttribute('disabled');
        animatieRemove();
    })
}

// Functie om de Like animatie te starten en daarna te verwijderen.
function animatieLike(){
    document.getElementById("article").className = 'animatieLike';
    document.getElementById("hartje").className += ' heartAnimation';
    document.getElementById("buttonLike").disabled = true;
    article.addEventListener('animationend', () => {
        document.getElementById("buttonLike").removeAttribute('disabled');
        animatieRemove();

    })
}

// De animatie verwijder functie die word opgeroepen na x tijd 
function animatieRemove() {
    var articleContainer = document.getElementById("article")
    articleContainer.classList.remove("animatieLike");
    articleContainer.classList.remove("animatieNo");
    document.getElementById("hartje").classList.remove('heartAnimation');
}

// Pakt een random naam uit de voorgeschreven array van users
function randomUser (){
    randomUserName = Math.floor(Math.random() * users.length);
    selectUserName = users[randomUserName]
    document.getElementById("username").innerHTML = "Gemaakt door " + selectUserName;
}

// Dit was de oude manier om fotos in te laden uit een vastgestelde array van fotos.

// function randomPicture (){
//     randomImage = Math.floor(Math.random() * dogImages.length);
//     selectImage = dogImages[randomImage]
//     document.getElementById("imageContainer").src = `images/${selectImage}`
//     console.log(selectImage)
// }

// Pakt een random honden naam uit  de voorgeschreven array van namen
function randomName (){
    randomDogName = Math.floor(Math.random() * dogNames.length);
    selectName = dogNames[randomDogName]
    document.getElementById("dogName").innerHTML = selectName;
}
    
// Button interacties
// De app is te bedienen met arrow right en left.
// Kijken naar js switchen cases.
document.addEventListener("keydown", toetsIngedrukt);

function toetsIngedrukt(event) {
    if (event.code == "ArrowRight"){
      newDogLike();
    }
    else if (event.code == "ArrowLeft"){
        newDogNo();
    }
}


// DOG API om random fotos van honden in te laden.
// Link naar de GITHUB: https://github.com/ElliottLandsborough/dog-ceo-api 
// Uitleg en code om DOG API in te laden met vanilla JS.
// https://codepen.io/elliottlan/pen/MNEWNx


// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage()
{
  // get the json from the server
  var json = httpGet('https://dog.ceo/api/breeds/image/random');

  // decode the json into an array
  var array = JSON.parse(json);

  // get the image url from the array
  var url = array.message;

  // get the image object
  var image = document.getElementById('dogImage');

  // set the src of the image object
  image.src = url;
}

newDog();

// Dit was mijn javascript bestand.
// Neem een slokje koffie, of cola ;)

// Gemaakt door Marijn de Bruin
// https://github.com/Marijndebruin
// https://marijndebruin.com
