let body = document.querySelector('body');
let userInput = 0;

for (var i = 0; i<15; i++){
    let container = document.createElement('div');
    container.className = 'container';
    body.appendChild(container);
}



for (var i = 0; i<16; i++){
    let container = document.querySelectorAll('.container')[i];
       for(var j = 0; j<16; j++){
        let div = document.createElement('div');
        div.className = 'divs';
        container.appendChild(div);
    }
}


function mouseHover(e){   
    this.classList.add('hovering');
}

function resetGrid(e){
    const resetDiv = document.querySelectorAll('.divs');
    resetDiv.forEach(divs => divs.classList.remove('hovering'));
    addGrid();

}

function addGrid(){
    promptUser();
    let divs = document.querySelectorAll('.divs');
    divs.forEach(divs => divs.remove());

    let containers = document.querySelectorAll('.container');
    containers.forEach(container => container.remove());

   for (var i = 0; i<userInput; i++){
        let container = document.createElement('div');
        container.className = 'container';
        body.appendChild(container);
    }
    

    for (var i = 0; i <userInput; i++){
        let container = document.querySelectorAll('.container')[i];
           for(var j = 0; j<userInput; j++){
            let div = document.createElement('div');
            div.className = 'divs';
            container.appendChild(div);
        }
    }
    const div = document.querySelectorAll('.divs');
    div.forEach(divs => divs.addEventListener('mouseenter',mouseHover,{capture:true}));
    
    

}


function promptUser(){
    let resetPrompt = window.prompt('How many number of squares would you like? (100 Max)','');
    resetPrompt = parseInt(resetPrompt, 10);
    userInput = resetPrompt;
    return userInput;

}



const div = document.querySelectorAll('.divs');
div.forEach(divs => divs.addEventListener('mouseenter',mouseHover,{capture:true}));


const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid)





/* const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  */