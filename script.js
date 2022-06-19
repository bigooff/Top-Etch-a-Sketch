const reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{window.location.reload()})

const chooseSize = document.querySelector(".change");
chooseSize.addEventListener("click",changeSize)


function changeSize(){
    let input = prompt("please put grid Size");
    if(input < 2){
        console.log("not enough")
    } else if ( input > 100){
        console.log("too much")
    } else {
        makeGrid(input)
    }
}

function changeColor(){
    let cells = document.querySelectorAll(".gBox");
    for(let cell of cells){
        this.style.backgroundColor= "black"
    }
}

makeGrid(16);
function makeGrid(num){
let container = document.querySelector("#grid");
let cells = document.querySelectorAll(".gBox");
cells.forEach((div)=>div.remove())
container.style.gridTemplateColumns = `repeat(${num},1fr)`;
container.style.gridTemplateRows = `repeat(${num},1fr)`;
let numOfCells = num * num

    for(let i = 0; i < numOfCells; i++){
        let cell = document.createElement("div");
        cell.classList.add("gBox");
        container.appendChild(cell);     
        cell.addEventListener("mouseenter", changeColor)
    }
}

