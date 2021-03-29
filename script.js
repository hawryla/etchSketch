const divContainer = document.querySelector('#container');
const btn = document.querySelector('button');

//Creating grid of boxes
let createGrid = ()=>{
    for(let i = 0;i<gridValue*gridValue;i++){
        const singleBox = document.createElement('div');
        divContainer.appendChild(singleBox);
        singleBox.classList.add('box');
        singleBox.style.border='1px solid black';
        singleBox.style.width = `${600/gridValue}px`;
        singleBox.style.height = `${600/gridValue}px`;
    }
}

//Hover effect
let listenOnBoxes = ()=>{
    const singleBox = document.querySelectorAll('.box');
    let randomColor = ()=> Math.floor(Math.random()*255);
    singleBox.forEach(box => {
        box.addEventListener('mouseover',()=>{
            box.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()})`;
        })
    });
}

//Remove old boxes
let removeOldBoxes = ()=>{
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box=>{
        box.remove();
    })
}

//Take input from user
let usersInput = ()=>{
    gridValue = prompt('Enter the value');
    if(gridValue>64){
        alert('Max value is 64');
        gridValue = prompt('Enter the value');
    }
}

//Init grid
let gridValue = 16;
createGrid();
listenOnBoxes();


//Users custom grid
btn.addEventListener('click',()=>{
    usersInput();
    removeOldBoxes();
    createGrid();
    listenOnBoxes();
})






