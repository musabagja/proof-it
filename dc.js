// marvel.html
const dcQuestions = [
    {
        question: 'What Does the S on Superman`s chest stand for in Kryptonian?',
        answer: 'Hope',
        answerOption: ['Love', 'Hope', 'Faith', 'Star']
    },
    {
        question: 'What Superman propriety cast Amy Adams prior to her playing Lois Lane in Man of Steel?',
        answer: 'Smallville',
        answerOption: ['Smallville', 'Lois and Clark the New Adventures of Superman', 'Superman the Animated Series', 'Superman Returns']
    },
    {
        question: 'Which two large corporation logos were seen on buildings in Metropolis during Man of Steels final battle?',
        answer: 'Wayne Enterprises and Lexcorp',
        answerOption: ['Lexcorp and Star Labs', 'Wayne Enterprises and Kord Industries', 'Lexcorp and Queen Consolidated', 'Wayne Enterprises and Lexcorp']
    },
    {
        question: 'Batman V Superman Dawn of Justice was loosely based on what popular Batman story?',
        answer: 'The Dark Knight Returns',
        answerOption: ['The Dark Knight Returns', 'Batman Death of the Family', 'Batman Year One', 'Batman Hush']
    },
    {
        question: 'What did the jar on Senator Finch`s desk have written on it?',
        answer: 'Granny`s peach tea',
        answerOption: ['Luthor`s Urine', 'Granny`s peach tea', 'Uncle Pete`s coffee', 'Lex`s Soda Pop']
    },
    {
        question: 'What show do the actors who play Thomas and Martha Wayne star together in?',
        answer: 'The Walking Dead',
        answerOption: ['The Good Wife', 'Supernatural', 'The Walking Dead', 'The Vampire Dairies']
    },
    {
        question: 'What is the Jolly Rancher flavor that Lex Luthor feeds the Senator?',
        answer: 'Cherry',
        answerOption: ['Watermelon', 'Apple', 'Grape', 'Cherry']
    },
    {
        question: 'What Does Batman ask Superman when they first meet?',
        answer: '"Tell me, do you bleed?"',
        answerOption: ['"Can you die?"', '"Tell me, do you bleed?"', '"Are you scared?"', '"Do you sleep?"']
    },
    {
        question: 'What two villains make up Doomsday`s DNA?',
        answer: 'Zod and Lex Luthor',
        answerOption: ['Zod and Lex Luthor', 'Steppenwolf and Zod', 'Darkseid and Lex Luthor', 'Steppenwolf and Lex Luthor']
    },
    {
        question: 'What dessert does Wonder Woman first have in London that makes her extremely happy?',
        answer: 'Ice Cream',
        answerOption: ['Chocolate', 'Donuts', 'Ice Cream', 'Funnel Cake']
    },
    {
        question: 'What advice does Batman give the Flash during Justice League`s first team battle?',
        answer: '"Save one."',
        answerOption: ['"One Step"', '"One Punch"', '"Breathe"', '"Save one."']
    },
    {
        question: 'Which popular DC hero can be seen taking part in the ancient battle against Steppenwolf?',
        answer: 'Green Lantern',
        answerOption: ['Dr. Fate', 'The Spectre', 'The Phantom Stranger', 'Green Lantern']
    },
    {
        question: 'What is Batman`s secret "weapon" when they raise Superman?',
        answer: 'Lois Lane',
        answerOption: ['Kryptonite Spear', 'Lois Lane', 'Kryptonite Bomb', 'Shazam']
    },
    {
        question: 'What is the name of the device that Steppenwolf is trying to collect?',
        answer: 'Mother Box',
        answerOption: ['Mother Box', 'Inhuman Box', 'Father Box', 'Eternal Box']
    },
    {
        question: 'What meal annoys the Flash?',
        answer: 'Brunch',
        answerOption: ['Lunch', 'Brunch', 'Dinner', 'Tea']
    },
    {
        question: 'What sport was Victor Stone known for playing before he became Cyborg?',
        answer: 'Football',
        answerOption: ['Baseball', 'Basketball', 'Soccer', 'Football']
    },
    {
        question: 'Which villain makes a cameo at the end of Justice League hinting at a Legion of Doom?',
        answer: 'Deathstroke',
        answerOption: ['Deathstroke', 'Joker', 'Deadshot', 'Terra']
    },
    {
        question: 'What does Superman say that makes Batman not kill him?',
        answer: '"Save Martha"',
        answerOption: ['"I`m Clark Kent"', '"Tell Lois I love her"', '"I`m sorry"', '"Save Martha"']
    },
    {
        question: 'What was the name of the Villain that was killed for attempting to run away from the Suicide Squad?',
        answer: 'Slipknot',
        answerOption: ['Slipknot', 'Killer Croc', 'Deadshot', 'El Diablo']
    },
    {
        question: 'What was Harley Quinn`s profession before she became a supervillain?',
        answer: 'Psychiatrist',
        answerOption: ['Chef', 'Psychiatrist', 'Orderly', 'Nurse']
    },
]

let rightAnswer;
let trueCounter=0;
let healthPoint=3;
let selesai=[];

function generateQuestion() {
    const randomIndex=Math.floor(Math.random()*20)
    let selectedQuestion=dcQuestions[randomIndex];
    let flag=true;
    for(let i=0; i<selesai.length; i++){
        if(selectedQuestion[`answer`]===selesai[i]){
            flag=false;
        }
    }
    if(flag===true){
        selesai.push(selectedQuestion['answer']);
    }else if(flag===false){
        selectedQuestion=dcQuestions[randomIndex];
    }
    let questionPopped=document.getElementById('question-provided');
    let opsiSatu=document.getElementById('opsi-satu');
    let opsiDua=document.getElementById('opsi-dua');
    let opsiTiga=document.getElementById('opsi-tiga');
    let opsiEmpat=document.getElementById('opsi-empat');
    questionPopped.innerText=selectedQuestion['question'];
    opsiSatu.innerText=selectedQuestion[`answerOption`][0];
    opsiDua.innerText=selectedQuestion[`answerOption`][1];
    opsiTiga.innerText=selectedQuestion[`answerOption`][2];
    opsiEmpat.innerText=selectedQuestion['answerOption'][3];
    return selectedQuestion;
}

let selectedQuestion=generateQuestion();
countdown();
rightAnswer=selectedQuestion[`answer`]
let healthQty=document.getElementById("health-qty");
let trueQty=document.getElementById("true-qty");
let tombol=document.getElementsByClassName('tombol-ans');
let opsi1=document.getElementById("opsi-1");
let opsi2=document.getElementById("opsi-2");
let opsi3=document.getElementById("opsi-3");
let opsi4=document.getElementById("opsi-4");
let answerPopped;

healthQty.innerText=healthPoint;
trueQty.innerText=trueCounter;

function gameBegin() {
    selectedQuestion=generateQuestion();
    rightAnswer=selectedQuestion[`answer`]
    healthQty.innerText=healthPoint;
    trueQty.innerText=trueCounter;
    if(healthPoint===-1){
        window.location.href="defeat.html"
    }
    if(trueCounter===5){
        window.location.href="dc-congrats.html"
    }
    clearInterval(time=startingSeconds)
}

opsi1.addEventListener('click', function () {
    let answer=document.getElementById('opsi-satu')
    answerPopped=answer.innerText;
    if(answerPopped===rightAnswer){
        trueCounter++;
    }else{
        healthPoint--;
    }
    gameBegin();
})

opsi2.addEventListener('click', function () {
    let answer=document.getElementById('opsi-dua')
    answerPopped=answer.innerText;
    if(answerPopped===rightAnswer){
        trueCounter++;
    }else{
        healthPoint--;
    }
    gameBegin();
})

opsi3.addEventListener('click', function () {
    let answer=document.getElementById('opsi-tiga')
    answerPopped=answer.innerText;
    if(answerPopped===rightAnswer){
        trueCounter++;
    }else{
        healthPoint--;
    }
    gameBegin();
})

opsi4.addEventListener('click', function () {
    let answer=document.getElementById('opsi-empat')
    answerPopped=answer.innerText;
    if(answerPopped===rightAnswer){
        trueCounter++;
    }else{
        healthPoint--;
    }
    gameBegin();
})

const startingSeconds=15;
let time=startingSeconds;
const countDown=document.getElementById("countdown-hud");

function countdown(){
    setInterval(function(){
        if(time<0){
            clearInterval(time=startingSeconds, healthPoint--)
            gameBegin();
        }
        countDown.innerText=time;
        time--
    }, 1000)
}


