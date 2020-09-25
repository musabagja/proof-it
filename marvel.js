// marvel.html
const marvelQuestions = [
    {
        question: 'IRON MAN: What song plays at the beginning of the movie?',
        answer: '"Back In Black" by AC/DC',
        answerOption: ['"Iron Man" by Black Sabbath', '"Back In Black" by AC/DC', '"Ordinary World" by Duran Duran', '"Stairway to Heaven" by Led Zeppelin']
    },
    {
        question: 'THE INCREDIBLE HULK: What does Tony tell Thaddeus Ross at the end of the film?',
        answer: 'That they are putting a team together',
        answerOption: ['That he wants to study The Hulk','That he knows about S.H.I.E.L.D.','That they are putting a team together','That Thaddeus owes him money']
    },
    {
        question: 'IRON MAN 2: What fake name does Natasha use when she first meets Tony?',
        answer: 'Natalie Rushman',
        answerOption: ['Natalie Rushman','Natalia Romanoff','Nicole Rohan','Naya Rabe']
    },
    {
        question: 'THOR: What does Thor want "another" of when he`s in the diner?',
        answer: 'A cup of coffee',
        answerOption: ['A slice of pie','A piece of toast','A stack of pancakes','A cup of coffee']
    },
    {
        question: 'CAPTAIN AMERICA: THE FIRST AVENGER: Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice? ',
        answer: 'The Stork Club',
        answerOption: ['The Cotton Club','The Stork Club','El Morocco','The Copacabana']
    },
    {
        question: 'THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what?',
        answer: 'Their time in Budapest',
        answerOption: ['Their time in Budapest', 'Their time in Prague', 'Their time in Istanbul', 'Their time in Sokovia']
    },
    {
        question: 'IRON MAN 3: What is the name of the little boy Tony befriends while stranded',
        answer: 'Harley',
        answerOption: ['Harry', 'Henry', 'Harley', 'Holden']
    },
    {
        question: 'THOR: THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie?',
        answer: 'They give it to the Collector',
        answerOption: ['On Vormir', 'In a vault on Asgard', 'Inside Sif`s sword', 'They give it to the Collector']
    },
    {
        question: 'CAPTAIN AMERICA: THE WINTER SOLDIER: What does the Winter Soldier say after Steve recognizes him for the first time?',
        answer: '"Who the hell is Bucky?"',
        answerOption: ['"Who the hell is Bucky?"', '"Do I know you?"', '"He`s gone."', '"What did you say?"']
    },
    {
        question: 'GUARDIANS OF THE GALAXY: What were the three items Rocket claims he needs in order to escape the prison?',
        answer: 'A security band, a battery, and a prosthetic leg',
        answerOption: ['A security card, a fork, and an ankle monitor', 'A security band, a battery, and a prosthetic leg', 'A pair of binoculars, a detonator, and a prosthetic leg', 'A knife, cable wires, and Peter`s mixtape']
    },
    {
        question: 'AVENGERS: AGE OF ULTRON: What word does Tony utter that makes Steve say, "Language"?',
        answer: '"Shit!"',
        answerOption: ['"Crap!"', '"Asshole!"', '"Shit!"', '"Idiot!"']
    },
    {
        question: 'ANT-MAN: What animal does Darren Cross unsuccessfully shrink?',
        answer: 'Sheep',
        answerOption: ['Mouse', 'Sheep', 'Duck', 'Hamster']
    },
    {
        question: 'CAPTAIN AMERICA: CIVIL WAR: Who ISN`T on Iron Man`s team?',
        answer: 'Hawkeye',
        answerOption: ['Vision', 'Black Panther', 'Hawkeye', 'Black Widow']
    },
    {
        question: 'DOCTOR STRANGE: What type of doctor is Stephen Strange?',
        answer: 'Neurosurgeon',
        answerOption: ['Neurosurgeon', 'Cardiothoracic Surgeon', 'Trauma Surgeon', 'Plastic Surgeon']
    },
    {
        question: 'GUARDIANS OF THE GALAXY VOL. 2: Finish this line: "I`m _______, y`all!"',
        answer: 'Mary Poppins',
        answerOption: ['Superman', 'Peter Pan', 'Underdog', 'Mary Poppins']
    },
    {
        question: 'SPIDER-MAN: HOMECOMING: Who does Stan Lee appear as?',
        answer: 'A neighbor who is disturbed by a car alarm',
        answerOption: ['A guy who Spider-Man helps cross the street', 'A neighbor who is disturbed by a car alarm', 'Peter`s upstairs neighbor', 'A guy who works at a hot dog cart']
    },
    {
        question: 'THOR: RAGNAROK: What is Valkyrie`s scrapper number?',
        answer: '142',
        answerOption: ['3', '16', '142', '232']
    },
    {
        question: 'BLACK PANTHER: What do Killmonger and Klaue steal from the Museum of Great Britain?',
        answer: 'Vibranium and a mask',
        answerOption: ['Just vibranium', 'Vibranium and a mask', 'A map of Wakanda', 'A map of Wakanda and vibranium']
    },
    {
        question: 'AVENGERS: INFINITY WAR: What elective class did Thor take on Asgard?',
        answer: 'Learning to speak Groot',
        answerOption: ['Learning to speak Groot', 'Hammer making', 'Learning to fly a space ship', 'How to take care of rabbits']
    },
    {
        question: 'AVENGERS: ENDGAME: What is Natasha`s final line before she sacrifices herself on Vormir?',
        answer: '"It`s okay."',
        answerOption: ['"Let me go."', '"It`s okay."', '"Tell everyone I—"', '"Clint."']
    }
]

let rightAnswer;
let trueCounter=0;
let healthPoint=3;
let selesai=[];

function generateQuestion() {
    const randomIndex=Math.floor(Math.random()*20)
    let selectedQuestion=marvelQuestions[randomIndex];
    let flag=true;
    for(let i=0; i<selesai.length; i++){
        if(selectedQuestion[`answer`]===selesai[i]){
            flag=false;
        }
    }
    if(flag===true){
        selesai.push(selectedQuestion['answer']);
    }else if(flag===false){
        selectedQuestion=marvelQuestions[randomIndex];
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
        window.location.href="marvel-congrats.html"
    }
    clearInterval(time=startingSeconds);
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



