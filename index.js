// index.html
let startButton=document.getElementById('submit');
let marvelButton=document.getElementById('marvel-button');
let dcButton=document.getElementById('dc-button');
let nextOrder=document.getElementById('nextOrder');
marvelButton.onclick=function() {
    startButton.action="./marvel.html";
    nextOrder.innerText="Click the start button!!";
}
dcButton.onclick=function() {
    startButton.action="./dc.html";
    nextOrder.innerText="Click the start button!!";
}
