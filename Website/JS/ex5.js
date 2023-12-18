const container = document.getElementById('container');
const color =['red', 'yellow', 'Aquamarine','green','LightCyan','orange','Chartreuse','DeepSkyBlue','MediumPurple'];
const SQUARES = 210;


for(let i=0; i<SQUARES;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShandow = 'white'
}

function getRandomColor(){
    return color[Math.floor(Math.random()*color.length)]
}
 
function removeColor(element){
    element.style.background = 'white';
    element.style.boxShandow = 'black';
}