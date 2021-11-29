// kood võetud https://www.youtube.com/watch?v=GUEB9FogoP8

// valib teksti
const text = document.querySelector(".fancy"); 
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

// teeb listi teksti tähtedest
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span class=\"esi\">" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick, 50);

// lisab tekstile üks haaval tähti
function onTick(){
    const span = text.querySelectorAll('.esi')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

// kui tekst on valmis
function complete(){
    clearInterval(timer);
    timer = null;
}
