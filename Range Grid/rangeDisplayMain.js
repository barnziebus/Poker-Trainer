import { Grid } from "./RangeGrid.js";


let gridContainer = document.getElementById("rangGridContainer")
let rangeGrid = new Grid(gridContainer)


let clearRangeButton = document.getElementById("clear range button");
clearRangeButton.addEventListener("click", () => {
    rangeGrid.clearRange()
})

let saveRangeButton = document.getElementById("save range button");
saveRangeButton.addEventListener("click", () => {
    rangeGrid.saveRange()
})