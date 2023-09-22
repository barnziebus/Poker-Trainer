// js initialisation of the range seclection bar
import { RFI_Ranges } from "./Ranges/ranges_RFI.js";

export class RangePicker{
    constructor(rangePickerContainer, rangesDatabase, rangeGrid) {
        this.parentContainer = rangePickerContainer;
        this.rangesDb = rangesDatabase;
        this.rangeGrid = rangeGrid

        this.buildRangePicker(rangePickerContainer, rangesDatabase)
    }

    buildRangePicker(container, rangesDatabase) {
        let listContainer = document.createElement("ul")
        for (let range in rangesDatabase) {
            let currentRange = rangesDatabase[range];
            this.addOption(listContainer, currentRange.name)
        }
        container.appendChild(listContainer)
    }

    addOption(container, displayText) {
        let listItem = document.createElement("li")
        listItem.innerText = displayText
        container.appendChild(listItem)
        listItem.addEventListener("click", () => {
            this.getRange(displayText)
        })
    }

    getRange(rangeName) {
        for (let range in this.rangesDb) {
            let currentRange = this.rangesDb[range];
            if (rangeName === currentRange.name) {
                this.rangeGrid.displayRange(currentRange.range)
                // set active range method call from range db handler
            }
        }
    }
}