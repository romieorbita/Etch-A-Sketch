let body = document.querySelector('body');

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
}


const div = document.querySelectorAll('.divs');
div.forEach(divs => divs.addEventListener('mouseenter',mouseHover,{capture:true}));


const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid)





/* const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  */