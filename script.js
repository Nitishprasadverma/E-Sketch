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

// Function to create the grid boxes.
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
        hoverboxes.style.backgroundColor = `${randomColor()}`; //Adding hover event to add the background color to the grids boxes.
    });
});

const newGrid = document.querySelector("#newGrid");
// event listener to the button new grid.
newGrid.addEventListener("click", () => {

    // removing the color of the all grids boxes.
    hoverboxes.forEach(hoverboxes => {
        hoverboxes.removeEventListener("mouseover", () => {
            hoverboxes.style.backgroundColor = `${randomColor()}`;
        });
    });
    // to get the size of the grid from the user.
    let value = prompt("new grid size:");
    if (value > 100) {
        alert("please enter a value under 100 grids.");
        return;
    }

    container.innerHTML = ""; //once user entered value div container will change to empty.
    grid = value;
    let containerWidth = (grid * boxSize);
    container.style.width = `${containerWidth}px`;

    //call the creategrid function again to create the grid boxes after clearing the container after value entered.
    createGrid();
    // mouseover event listener to all the grid boxes to assigning the backgroundcolor agian.
    let hoverboxe = document.querySelectorAll(".gridStyle");
    hoverboxe.forEach(hoverboxe => {
        hoverboxe.addEventListener("mouseover", () => {
            hoverboxe.style.backgroundColor = `${randomColor()}`;
        });
    });
});



