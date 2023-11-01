var i = 0;

var imgList = ["./Assets/Dish5.jpg","./Assets/Dish3.jpg","./Assets/Dish4.webp","./Assets/Dish5.jpg","./Assets/Dish6.jpg","./Assets/Dish2.jpeg"];
var rList = 
["Servings: 100\n\nFish\nSmall Potatos\nLetuce\n\nInstructions\n\nBoil Letuce on high\nCook Fish to rare\nwash Potatos\nserve\neat fish"
,"Servings: 10\n\nCheese\nPepperoni\nPizza Sauce\nTomato\nBasil\nOlives\n\nInstructions\n\nMake Dough\nLet Dough rest 30 min\nPlace condements on top\npreheat oven at 400\ncook pizza 20 min"
,"Servings: 1\n\nSalmon\nPotato\nLemon\nCucumber\n\nInstructions\n\ncook Salmon\nBoil Potatos\nSlice Cucmber\nSqueeze Lemon over top\nGarnish"
,"Servings: 5\n\nHaddoc\nPotato\nSpinach\n\nInstructions\n\nCook Haddoc\nBoil potato\nSteam spinach"
,"Servings: 4\n\nChicken\nDuck\nFood\n\nInstructions\n\nCook Chicken\nDeep Fry Duck\nCook Food"
,"Servings: 3\n\nBread\nAmerican Cheese\nTomato\nCucumber\nProvalone\n\nInstructions\n\nToast Bread\ngrill sandwich with all condements"];





var done = false;
function imgNext(){
    i++;
    console.log(i); 
    var imgNow = document.getElementById("rImage");
    imgNow.src = imgList.pop();
    var recipy = document.getElementById("rRecipy");
    
    
    recipy.value=rList.pop();
    console.log(imgList.length)
    if(done)
    {
        imgList=["./Assets/Dish5.jpg","./Assets/Dish3.jpg","./Assets/Dish4.webp","./Assets/Dish5.jpg","./Assets/Dish6.jpg","./Assets/Dish2.jpeg"];
        imgNow.src="./Assets/Dish1.webp";
        recipy.value="Servings: 5\n\nOnion\nGarlic\nPotato\n\nInstructions\n\nSimmer Onion and garlic in large pot\nBoil Potato\nMash Potato\nCombin in Large serving dish\nGarnish"
        done=false;
        rList=
        ["Servings: 100\n\nFish\nSmall Potatos\nLetuce\n\nInstructions\n\nBoil Letuce on high\nCook Fish to rare\nwash Potatos\nserve\neat fish"
        ,"Servings: 10\n\nCheese\nPepperoni\nPizza Sauce\nTomato\nBasil\nOlives\n\nInstructions\n\nMake Dough\nLet Dough rest 30 min\nPlace condements on top\npreheat oven at 400\ncook pizza 20 min"
        ,"Servings: 1\n\nSalmon\nPotato\nLemon\nCucumber\n\nInstructions\n\ncook Salmon\nBoil Potatos\nSlice Cucmber\nSqueeze Lemon over top\nGarnish"
        ,"Servings: 5\n\nHaddoc\nPotato\nSpinach\n\nInstructions\n\nCook Haddoc\nBoil potato\nSteam spinach"
        ,"Servings: 4\n\nChicken\nDuck\nFood\n\nInstructions\n\nCook Chicken\nDeep Fry Duck\nCook Food"
        ,"Servings: 3\n\nBread\nAmerican Cheese\nTomato\nCucumber\nProvalone\n\nInstructions\n\nToast Bread\ngrill sandwich with all condements"];
        
        
    }
    if(imgList.length<=0)
    {
        done = true;
    }

    
}