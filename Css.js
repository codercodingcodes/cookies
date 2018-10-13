var cheddar = 0;
var vine = 0;
var vines = 15;
var aged = 0;
var viness = 0;

var milk = 0;
var milks = 100;
var milkss = 0;

var work = 0;
var works = 1500;
var workss = 0;

var fact = 0;
var facts = 20000;
var factss = 0;

var elder = 0;
var elders = 100000;
var elderss = 0;

var globe = 0;
var globes = 5000000;
var globess = 0;

var Cps = 0;
   
function Parmasian(){
    cheddar += 1 + Cps ;  
}
function blue(){
    if (cheddar > vines) {
        heading = document.querySelector(".vin");
        vine += 1 ;
        heading.innerHTML ="<p>owned : " + vine +"</p>";
        cheddar -= vines;
        vines += vines*0.1;
        viness = vines;
        viness=Math.round(vines)
        heading = document.querySelector(".vincost");
        heading.innerHTML ="<p>" + viness + " cheeses </p>";
        $('.vindiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="vinegar.png">');
        if (vine > 0){
             $(".vindiv").css("opacity", "100");
        }
    }
    if (cheddar < vine) {
        $(".vinegar").css("background", "rgba(255, 255, 51, 0.8)");
    }
}

function blue1(){
    if (cheddar > milks) {
        heading = document.querySelector(".mil");
        milk += 1 ;
        heading.innerHTML ="<p>owned : " + milk +"</p>"
        cheddar -= milks;
        milks += milks*0.1;
        milkss = milks;
        milkss=Math.round(milks)
        heading = document.querySelector(".milkcost");
        heading.innerHTML ="<p>" + milkss + " cheeses </p>"
        $('.mlkdiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="milk.png">');
        if (milk > 0){
             $(".mlkdiv").css("opacity", "100");
        }
    }
    if (cheddar < milk) {
        $(".milk").css("background", "rgba(255, 255, 51, 0.8)");
    }
}

function blue2(){
    if (cheddar >works) {
        heading = document.querySelector(".work");
        work += 1 ;
        heading.innerHTML ="<p>owned : " + work +"</p>"
        cheddar -= works;
        works += works*0.1;
        workss = works;
        workss=Math.round(works)
        heading = document.querySelector(".workcost");
        heading.innerHTML ="<p>" + workss + " cheeses </p>";
        $('.wrkdiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="Cheesemakers.png">');
        if (work > 0){
             $(".wrkdiv").css("opacity", "100");
        }
    }
    if (cheddar < work) {
        $(".workers").css("background", "rgba(255, 255, 51, 0.8)");
    }
}

function blue3(){
    if (cheddar >facts) {
        heading = document.querySelector(".fact");
        fact += 1 ;
        heading.innerHTML ="<p>owned : " + fact +"</p>"
        cheddar -= facts;
        facts += facts*0.1;
        factss = facts;
        factss=Math.round(facts)
        heading = document.querySelector(".factcost");
        heading.innerHTML ="<p>" + factss + " cheeses </p>";
        $('.facdiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="Factory.png">');
        if (fact > 0){
             $(".facdiv").css("opacity", "100");
        }
    }
    if (cheddar < fact) {
        $(".factory").css("background-color", "rgba(255, 255, 51, 0.8)");
    }
}
function blue4(){
    if (cheddar > elders) {
        heading = document.querySelector(".elde");
        elder += 1 ;
        heading.innerHTML ="<p>owned : " + elder +"</p>"
        cheddar -= elders;
        elders += elders*0.1;
        elderss = elders;
        elderss=Math.round(elders)
        heading = document.querySelector(".eldercost");
        heading.innerHTML ="<p>" + elderss + " cheeses </p>"
        $('.elddiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="elders.png">');
        if (elder > 0){
             $(".elddiv").css("opacity", "100");
        }
    }
    if (cheddar < elder) {
        $(".elder").css("background-color", "rgba(255, 255, 51, 0.8)");
    }
}
function blue5(){
    if (cheddar > globes) {
        heading = document.querySelector(".glob");
        globe += 1 ;
        heading.innerHTML ="<p>owned : " + globe +"</p>"
        cheddar -= globes;
        globes += globes*0.1;
        globess = globes;
        globess=Math.round(globes)
        heading = document.querySelector(".globecost");
        heading.innerHTML ="<p>" + globess + " cheeses </p>"
        $('.glodiv').append('<img style = "top: 10%; width: 100px; height: 100px; margin: 0; "src="Globalizaion.png">');
        if (globe > 0){
             $(".glodiv").css("opacity", "100");
        }
    }
    if (cheddar  < globe) {
        $(".globe").css("background-color", "rgba(255, 255, 51, 0.8)");
    }
}

window.setInterval(function vinegar(){
    Cps = vine*0.1 + milk*0.5 + work*1.5 + fact*3 + elder*10 + globe*50;
    cheddar += Cps;
    heading = document.querySelector(".bb");
    aged = cheddar;
    aged=Math.floor(aged);
    /*console.log(aged);*/
    heading.innerHTML ="<h1>" + aged + "</h1>"
    $(".bb").css("vertical-align","baseline")
    if (cheddar > vines) {
        $(".vinegar").css("background-color", "green");
    }else{
        if (vine > 0){
        $(".vinegar").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".vinegar").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
    }
    if (cheddar > milks) {
        $(".milk").css("background-color", "green");
    }else{
        if (milk > 0){
        $(".milk").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".milk").css("background-color", "rgba(0, 0, 0, 0.5)");
        }      
    }
    
    if (cheddar > works) {
        $(".workers").css("background-color", "green");
    }else{
        if (work > 0){
        $(".workers").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".workers").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
    }
    if (cheddar > facts) {
        $(".factory").css("background-color", "green");
    }else{
        if (fact > 0){
        $(".factory").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".factory").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
    }
    if (cheddar > elders) {
        $(".elder").css("background-color", "green");
    }else{
        if (elder > 0){
        $(".elder").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".elder").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
    }
    if (cheddar > globes) {
        $(".globe").css("background-color", "green");
    }else{
        if (globe > 0){
        $(".globe").css("background-color", "rgba(255, 255, 51, 0.8)");
        }else{
        $(".globe").css("background-color", "rgba(0, 0, 0, 0.5)");
        }
    }
}, 100);









