var apiResponse = {
    "drinks": [
       {
          "strDrink": "3-Mile Long Island Iced Tea",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg",
          "idDrink": "15300"
        },
        {
          "strDrink": "69 Special",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg",
          "idDrink": "13940"
        },
        {
          "strDrink": "A1",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
          "idDrink": "17222"
        },
        {
          "strDrink": "Abbey Cocktail",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyyuw1472811568.jpg",
          "idDrink": "17834"
        },
        {
          "strDrink": "Abbey Martini",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg",
          "idDrink": "17223"
        },
        {
          "strDrink": "Ace",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
          "idDrink": "17225"
        },
        {
          "strDrink": "Adam & Eve",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vfeumw1504819077.jpg",
          "idDrink": "17226"
        },
        {
          "strDrink": "Addison",
          "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yzva7x1504820300.jpg",
          "idDrink": "17228"
        }
    ]
 };

function createCocktailCard (name, imageURL, id) {
    var result = document.createElement("div");

    //Setting the class
    result.classList.add ("card");

    var h3 = document.createElement ("h3")
    h3.textContent = name;
    result.appendChild (h3);

    var img = document.createElement ("img");
    img.src = imageURL;
    result.appendChild (img);

    result.addEventListener ("click", function (event) {
        var spotlight = createCocktailSpotlight (name, imageURL, id);
        document.body.appendChild (spotlight);
    })

    return result;
}

function createCocktailSpotlight(name, imageURL, id) {
    var result = document.createElement("div");
    result.id = "spotlight";

    // Create a card for the cocktail details
    var card = document.createElement("div");
    card.id = "spotlight-card";

    var h1 = document.createElement("h1");
    h1.textContent = name;
    card.appendChild(h1);

    var img = document.createElement("img");
    img.src = imageURL;
    card.appendChild(img)

    // We'll fecht the instructions later from the API using the id
    var instructions = document.createElement ("p");
    instructions.textContent = "Instructions will go here";
    card.appendChild (instructions);

    // Add the card to the spotlight
    result.appendChild (card);

    result.addEventListener("click", function (event) {
        result.remove();
    })

    return result;
}

var cocktailList = document.querySelector("#cocktail-list");

var drinks = apiResponse.drinks;

for (var i = 0; i < drinks.length; i++) {
    var drink = drinks[i];
    var name = drink.strDrink;
    var imageURL = drink.strDrinkThumb;
    var id = drink.idDrink;
    
    var cocktailCard = createCocktailCard (name, imageURL, id);
    cocktailList.appendChild (cocktailCard);
}

