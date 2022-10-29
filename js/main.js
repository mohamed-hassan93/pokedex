//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// Access-Control-Allow-Origin: *


document.querySelector('.searchButton').addEventListener('click', cocktailDatabase)


function cocktailDatabase(){
    
    let categorySelect = document.getElementById('categories');

    let drink = document.querySelector('input').value.toLowerCase();

    let catVal = categorySelect.value;

    switch(catVal){
        case 'name':
            apiUrl =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
            break;
        case "firstLetter":
            apiUrl =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drink}`);
            break;
        case "ingredient":
            apiUrl =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${drink}`);
            break;
        case "random":
            apiUrl =(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
            break;
    }; 

    if (apiUrl === `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`){
        fetch(apiUrl)
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionOneApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionOneDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionOneItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionOneItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionOneItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionOneItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`;

            document.querySelector('.sectionTwoApiImageSrc').src = data.drinks[1].strDrinkThumb
            document.querySelector('.sectionTwoDrinkTitle').innerHTML = data.drinks[1].strDrink;
            document.querySelector('.sectionTwoItemOne').innerHTML = `Category: ${data.drinks[1].strCategory}`;
            document.querySelector('.sectionTwoItemTwo').innerHTML = `Glass Type: ${data.drinks[1].strGlass}`;
            document.querySelector('.sectionTwoItemThree').innerHTML = `IBA: ${data.drinks[1].strIBA}`;
            document.querySelector('.sectionTwoItemFour').innerHTML = `Instructions: ${data.drinks[1].strInstructions}`;

            document.querySelector('.sectionThreeApiImageSrc').src = data.drinks[2].strDrinkThumb
            document.querySelector('.sectionThreeDrinkTitle').innerHTML = data.drinks[2].strDrink;
            document.querySelector('.sectionThreeItemOne').innerHTML = `Category: ${data.drinks[2].strCategory}`;
            document.querySelector('.sectionThreeItemTwo').innerHTML = `Glass Type: ${data.drinks[2].strGlass}`;
            document.querySelector('.sectionThreeItemThree').innerHTML = `IBA: ${data.drinks[2].strIBA}`;
            document.querySelector('.sectionThreeItemFour').innerHTML = `Instructions: ${data.drinks[2].strInstructions}`;

            document.querySelector('.sectionFourApiImageSrc').src = data.drinks[3].strDrinkThumb
            document.querySelector('.sectionFourDrinkTitle').innerHTML = data.drinks[3].strDrink;
            document.querySelector('.sectionFourItemOne').innerHTML = `Category: ${data.drinks[3].strCategory}`;
            document.querySelector('.sectionFourItemTwo').innerHTML = `Glass Type: ${data.drinks[3].strGlass}`;
            document.querySelector('.sectionFourItemThree').innerHTML = `IBA: ${data.drinks[3].strIBA}`;
            document.querySelector('.sectionFourItemFour').innerHTML = `Instructions: ${data.drinks[3].strInstructions}`;

            document.querySelector('.sectionFiveApiImageSrc').src = data.drinks[4].strDrinkThumb
            document.querySelector('.sectionFiveDrinkTitle').innerHTML = data.drinks[4].strDrink;
            document.querySelector('.sectionFiveItemOne').innerHTML = `Category: ${data.drinks[4].strCategory}`;
            document.querySelector('.sectionFiveItemTwo').innerHTML = `Glass Type: ${data.drinks[4].strGlass}`;
            document.querySelector('.sectionFiveItemThree').innerHTML = `IBA: ${data.drinks[4].strIBA}`;
            document.querySelector('.sectionFiveItemFour').innerHTML = `Instructions: ${data.drinks[4].strInstructions}`;

            document.querySelector('.sectionSixApiImageSrc').src = data.drinks[5].strDrinkThumb
            document.querySelector('.sectionSixDrinkTitle').innerHTML = data.drinks[5].strDrink;
            document.querySelector('.sectionSixItemOne').innerHTML = `Category: ${data.drinks[5].strCategory}`;
            document.querySelector('.sectionSixItemTwo').innerHTML = `Glass Type: ${data.drinks[5].strGlass}`;
            document.querySelector('.sectionSixItemThree').innerHTML = `IBA: ${data.drinks[5].strIBA}`;
            document.querySelector('.sectionSixItemFour').innerHTML = `Instructions: ${data.drinks[5].strInstructions}`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }else if (apiUrl === `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drink}`){
        fetch(apiUrl)
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionOneApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionOneDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionOneItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionOneItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionOneItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionOneItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`

            document.querySelector('.sectionTwoApiImageSrc').src = data.drinks[1].strDrinkThumb
            document.querySelector('.sectionTwoDrinkTitle').innerHTML = data.drinks[1].strDrink;
            document.querySelector('.sectionTwoItemOne').innerHTML = `Category: ${data.drinks[1].strCategory}`;
            document.querySelector('.sectionTwoItemTwo').innerHTML = `Glass Type: ${data.drinks[1].strGlass}`;
            document.querySelector('.sectionTwoItemThree').innerHTML = `IBA: ${data.drinks[1].strIBA}`;
            document.querySelector('.sectionTwoItemFour').innerHTML = `Instructions: ${data.drinks[1].strInstructions}`

            document.querySelector('.sectionThreeApiImageSrc').src = data.drinks[2].strDrinkThumb
            document.querySelector('.sectionThreeDrinkTitle').innerHTML = data.drinks[2].strDrink;
            document.querySelector('.sectionThreeItemOne').innerHTML = `Category: ${data.drinks[2].strCategory}`;
            document.querySelector('.sectionThreeItemTwo').innerHTML = `Glass Type: ${data.drinks[2].strGlass}`;
            document.querySelector('.sectionThreeItemThree').innerHTML = `IBA: ${data.drinks[2].strIBA}`;
            document.querySelector('.sectionThreeItemFour').innerHTML = `Instructions: ${data.drinks[2].strInstructions}`

            document.querySelector('.sectionFourApiImageSrc').src = data.drinks[3].strDrinkThumb
            document.querySelector('.sectionFourDrinkTitle').innerHTML = data.drinks[3].strDrink;
            document.querySelector('.sectionFourItemOne').innerHTML = `Category: ${data.drinks[3].strCategory}`;
            document.querySelector('.sectionFourItemTwo').innerHTML = `Glass Type: ${data.drinks[3].strGlass}`;
            document.querySelector('.sectionFourItemThree').innerHTML = `IBA: ${data.drinks[3].strIBA}`;
            document.querySelector('.sectionFourItemFour').innerHTML = `Instructions: ${data.drinks[3].strInstructions}`

            document.querySelector('.sectionFiveApiImageSrc').src = data.drinks[4].strDrinkThumb
            document.querySelector('.sectionFiveDrinkTitle').innerHTML = data.drinks[4].strDrink;
            document.querySelector('.sectionFiveItemOne').innerHTML = `Category: ${data.drinks[4].strCategory}`;
            document.querySelector('.sectionFiveItemTwo').innerHTML = `Glass Type: ${data.drinks[4].strGlass}`;
            document.querySelector('.sectionFiveItemThree').innerHTML = `IBA: ${data.drinks[4].strIBA}`;
            document.querySelector('.sectionFiveItemFour').innerHTML = `Instructions: ${data.drinks[4].strInstructions}`

            document.querySelector('.sectionSixApiImageSrc').src = data.drinks[5].strDrinkThumb
            document.querySelector('.sectionSixDrinkTitle').innerHTML = data.drinks[5].strDrink;
            document.querySelector('.sectionSixItemOne').innerHTML = `Category: ${data.drinks[5].strCategory}`;
            document.querySelector('.sectionSixItemTwo').innerHTML = `Glass Type: ${data.drinks[5].strGlass}`;
            document.querySelector('.sectionSixItemThree').innerHTML = `IBA: ${data.drinks[5].strIBA}`;
            document.querySelector('.sectionSixItemFour').innerHTML = `Instructions: ${data.drinks[5].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }else if (apiUrl === `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${drink}`){
        fetch(apiUrl)
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionOneApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionOneDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionOneItemOne').innerHTML = `Ingredient: ${data.drinks[0].strIngredient1}`;
            document.querySelector('.sectionOneItemTwo').innerHTML = `Ingredient: ${data.drinks[0].strIngredient2}`;
            document.querySelector('.sectionOneItemThree').innerHTML = `Ingredient: ${data.drinks[0].strIngredient3}`;
            document.querySelector('.sectionOneItemFour').innerHTML = `Ingredient: ${data.drinks[0].strIngredient4}`;
            document.querySelector('.sectionOneItemFive').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`;

            document.querySelector('.sectionTwoApiImageSrc').src = data.drinks[1].strDrinkThumb
            document.querySelector('.sectionTwoDrinkTitle').innerHTML = data.drinks[1].strDrink;
            document.querySelector('.sectionTwoItemOne').innerHTML = `Ingredient: ${data.drinks[1].strIngredient1}`;
            document.querySelector('.sectionTwoItemTwo').innerHTML = `Ingredient: ${data.drinks[1].strIngredient2}`;
            document.querySelector('.sectionTwoItemThree').innerHTML = `Ingredient: ${data.drinks[1].strIngredient3}`;
            document.querySelector('.sectionTwoItemFour').innerHTML = `Ingredient: ${data.drinks[1].strIngredient4}`;
            document.querySelector('.sectionTwoItemFive').innerHTML = `Instructions: ${data.drinks[1].strInstructions}`;

            document.querySelector('.sectionThreeApiImageSrc').src = data.drinks[2].strDrinkThumb
            document.querySelector('.sectionThreeDrinkTitle').innerHTML = data.drinks[2].strDrink;
            document.querySelector('.sectionThreeItemOne').innerHTML = `Ingredient: ${data.drinks[2].strIngredient1}`;
            document.querySelector('.sectionThreeItemTwo').innerHTML = `Ingredient: ${data.drinks[2].strIngredient2}`;
            document.querySelector('.sectionThreeItemThree').innerHTML = `Ingredient: ${data.drinks[2].strIngredient3}`;
            document.querySelector('.sectionThreeItemFour').innerHTML = `Ingredient: ${data.drinks[2].strIngredient4}`;
            document.querySelector('.sectionThreeItemFive').innerHTML = `Instructions: ${data.drinks[2].strInstructions}`;

            document.querySelector('.sectionFourApiImageSrc').src = data.drinks[3].strDrinkThumb
            document.querySelector('.sectionFourDrinkTitle').innerHTML = data.drinks[3].strDrink;
            document.querySelector('.sectionFourItemOne').innerHTML = `Ingredient: ${data.drinks[3].strIngredient1}`;
            document.querySelector('.sectionFourItemTwo').innerHTML = `Ingredient: ${data.drinks[3].strIngredient2}`;
            document.querySelector('.sectionFourItemThree').innerHTML = `Ingredient: ${data.drinks[3].strIngredient3}`;
            document.querySelector('.sectionFourItemFour').innerHTML = `Ingredient: ${data.drinks[3].strIngredient4}`;
            document.querySelector('.sectionFourItemFive').innerHTML = `Instructions: ${data.drinks[3].strInstructions}`;

            document.querySelector('.sectionFiveApiImageSrc').src = data.drinks[4].strDrinkThumb
            document.querySelector('.sectionFiveDrinkTitle').innerHTML = data.drinks[4].strDrink;
            document.querySelector('.sectionFiveItemOne').innerHTML = `Ingredient: ${data.drinks[4].strIngredient1}`;
            document.querySelector('.sectionFiveItemTwo').innerHTML = `Ingredient: ${data.drinks[4].strIngredient2}`;
            document.querySelector('.sectionFiveItemThree').innerHTML = `Ingredient: ${data.drinks[4].strIngredient3}`;
            document.querySelector('.sectionFiveItemFour').innerHTML = `Ingredient: ${data.drinks[4].strIngredient4}`;
            document.querySelector('.sectionFiveItemFive').innerHTML = `Instructions: ${data.drinks[4].strInstructions}`;

            document.querySelector('.sectionSixApiImageSrc').src = data.drinks[5].strDrinkThumb
            document.querySelector('.sectionSixDrinkTitle').innerHTML = data.drinks[5].strDrink;
            document.querySelector('.sectionSixItemOne').innerHTML = `Ingredient: ${data.drinks[5].strIngredient1}`;
            document.querySelector('.sectionSixItemTwo').innerHTML = `Ingredient: ${data.drinks[5].strIngredient2}`;
            document.querySelector('.sectionSixItemThree').innerHTML = `Ingredient: ${data.drinks[5].strIngredient3}`;
            document.querySelector('.sectionSixItemFour').innerHTML = `Ingredient: ${data.drinks[5].strIngredient4}`;
            document.querySelector('.sectionSixItemFive').innerHTML = `Instructions: ${data.drinks[5].strInstructions}`;
      
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }else{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionOneApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionOneDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionOneItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionOneItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionOneItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionOneItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionTwoApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionTwoDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionTwoItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionTwoItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionTwoItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionTwoItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionThreeApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionThreeDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionThreeItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionThreeItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionThreeItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionThreeItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })


        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionFourApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionFourDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionFourItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionFourItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionFourItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionFourItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })


        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionFiveApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionFiveDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionFiveItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionFiveItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionFiveItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionFiveItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })


        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
    
        .then(data => {
            console.log(data);
            document.querySelector('.sectionSixApiImageSrc').src = data.drinks[0].strDrinkThumb
            document.querySelector('.sectionSixDrinkTitle').innerHTML = data.drinks[0].strDrink;
            document.querySelector('.sectionSixItemOne').innerHTML = `Category: ${data.drinks[0].strCategory}`;
            document.querySelector('.sectionSixItemTwo').innerHTML = `Glass Type: ${data.drinks[0].strGlass}`;
            document.querySelector('.sectionSixItemThree').innerHTML = `IBA: ${data.drinks[0].strIBA}`;
            document.querySelector('.sectionSixItemFour').innerHTML = `Instructions: ${data.drinks[0].strInstructions}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
    
}