var myRecipyList = [["Assets/Dish1.webp",1,1,1,1,1],["Assets/Dish2.jpeg",0,1,0,1,5],["Assets/Dish3.jpg",1,1,0,1,0]];
var RecipyDic=[["Assets/Dish1.webp",1,1,1,1,1],["Assets/Dish2.jpeg",0,1,0,1,5],["Assets/Dish3.jpg",1,1,0,1,0]];
var H = document.getElementsByClassName("Home");
var RI = document.getElementsByClassName("RecipyInsert");
var MR = document.getElementsByClassName("Recipies");
var B = document.getElementsByClassName("Browse");
function home(){
    

    
    for(var i = 0 ; i<RI.length; i++){
        RI[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        MR[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        B[i].style.display = "none";
    }
    for(var i = 0 ; i<H.length; i++){
        H[i].style.display = "block";
    }
}
function InsertRecipy(){
    for(var i = 0 ; i<H.length; i++){
        H[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        MR[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        B[i].style.display = "none";
    }
    for(var i = 0 ; i<RI.length; i++){
        RI[i].style.display = "block";
    }
}
function myRecipies(){
    
    for(var i = 0 ; i<H.length; i++){
        H[i].style.display = "none";
    }
    for(var i = 0 ; i<RI.length; i++){
        RI[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        B[i].style.display = "none";
    }
    for(var i = 0 ; i<RI.length; i++){
        MR[i].style.display = "block";
    }
}
function Browse(){
    
    for(var i = 0 ; i<H.length; i++){
        H[i].style.display = "none";
    }
    for(var i = 0 ; i<RI.length; i++){
        RI[i].style.display = "none";
    }
    for(var i = 0 ; i<MR.length; i++){
        B[i].style.display = "block";
    }
    for(var i = 0 ; i<RI.length; i++){
        MR[i].style.display = "none";
    }
}