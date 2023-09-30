import { Grid } from "./RangeGrid.js";
import { RangePicker } from "../database/rangeSelection.js";
import { DatabaseHandler } from "../database/databaseHandler.js";

function main() {
    let gridContainer = document.getElementById("rangGridContainer")
    let rangeSelectionContainer = document.getElementById("range selection container");
    
    let rangeDbHandler = new DatabaseHandler(rangeSelectionContainer)
    let rangeGrid = new Grid(gridContainer, rangeDbHandler)
    let rangeSelector = new RangePicker(rangeSelectionContainer, rangeDbHandler, changeRange)

    setButtons(rangeGrid)

    function changeRange(rangeInfo) {
        let activeRangeInfo = rangeInfo
        rangeDbHandler.setActiveRange(rangeInfo)
        rangeGrid.displayRange(activeRangeInfo.range)
    }
}

function setButtons(rangeGrid) {
    setClearRangeButton(rangeGrid)
    setSaveRangeButton(rangeGrid)
    setTogActionButton(rangeGrid)
    setPrintRangeButton(rangeGrid) 
}


function setClearRangeButton(rangeGrid) {
    let clearRangeButton = document.getElementById("clear range button");
    clearRangeButton.addEventListener("click", () => {
    rangeGrid.clearRange()
    })
}

function setSaveRangeButton(rangeGrid) {
    let saveRangeButton = document.getElementById("save range button");
    saveRangeButton.addEventListener("click", () => {
        rangeGrid.saveRange()
    })
}

function setTogActionButton(rangeGrid) {
    let toggleActionButton = document.getElementById("toggle action")
    toggleActionButton.addEventListener("click", () => {
        let action = rangeGrid.action
        if (action === "raise") {
            rangeGrid.action = "call"
            toggleActionButton.innerText = "Action = Call"
        } else {
            rangeGrid.action = "raise"
            toggleActionButton.innerText = "Action = Raise"
        }
    })
}

function setPrintRangeButton(rangeGrid) {
    let printRangeButton = document.getElementById("print range")
    let rangeOutputEl = document.getElementById("range output")
    printRangeButton.addEventListener("click", () => {
        let x = rangeGrid.getRange()
        let outputText = "const rangeName = " + JSON.stringify(x)
        rangeOutputEl.innerText = outputText
        navigator.clipboard.writeText(outputText)
        
    })
}

main()