const body = document.body;

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);


let grid = 16;
let boxSize = 20;

let containerWidth = (grid * boxSize);
container.style.width = `${containerWidth}px`;
createGrid();

// Random color generator;
function randomColor() {
    const lettrs = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += lettrs[Math.floor(Math.random() * 16)];
    }
    return color;

}

// console.log(randomColor());

function createGrid() {
    for (i = 0; i < grid * grid; i++) {
        const boxes = document.createElement("div");
        boxes.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px;`)

        boxes.classList.add("gridStyle", "square");
        container.appendChild(boxes)
    }
}

const hoverboxes = document.querySelectorAll(".square");

hoverboxes.forEach(hoverboxes => {
    hoverboxes.addEventListener("mouseover", () => {
        hoverboxes.style.backgroundColor = `${randomColor()}`;
    });
});

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", () => {


    hoverboxes.forEach(hoverboxes => {
        hoverboxes.removeEventListener("mouseover", () => {
            hoverboxes.style.backgroundColor = `${randomColor()}`;
        });

    });

    let value = prompt("new grid size:");
    if (value > 100) {
        alert("please enter a value under 100 grids.");
        return;
    }

    container.innerHTML = "";
    grid = value;

    let containerWidth = (grid * boxSize);
    container.style.width = `${containerWidth}px`;
    createGrid();


   let hoverboxe = document.querySelectorAll(".gridStyle");

    hoverboxe.forEach(hoverboxe => {
        hoverboxe.addEventListener("mouseover", () => {
            hoverboxe.style.backgroundColor = `${randomColor()}`;
        });
    });
});



