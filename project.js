const round=document.querySelector('.point')


round.addEventListener('mouseenter', () => {
    if(!round.classList.contains('point')) {
        round.classList.add('point');
    }
})

round.addEventListener('mouseleave', () =>{
    if(round.classList.contains('point')) {
        round.classList.remove('point');
    }
})

round.addEventListener('click', function() {
    this.style.display = "none";
    document.getElementById("warning").style.display = "block";
})

function warning() {
    document.getElementById("warning").style.display = "none";
    document.getElementById("no").style.display = "block";
}

function no() {
    document.getElementById("no").style.display = "none";
    document.getElementById("nada").style.display = "block";
}

function nada() {
    document.getElementById("nada").style.display = "none";
    document.getElementById("ekis").style.display = "block";
}
