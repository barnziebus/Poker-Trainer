// js initialisation of the range seclection bar
import { RFI_Ranges } from "./Ranges/ranges_RFI.js";

export class RangePicker{
    constructor(rangePickerContainer, rangesDatabase, rangeGrid) {
        this.parentContainer = rangePickerContainer;
        this.rangesDb = rangesDatabase;
        this.rangeGrid = rangeGrid

        this.types = []

        this.buildRangePicker(rangePickerContainer, rangesDatabase)
        this.selectionStructure = this.buildSelectionStructure(rangesDatabase, rangePickerContainer)
        console.log(this.selectionStructure)
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

    getDifferentTypes(rangesDatabase) {
        let types = []
        for (let range in rangesDatabase) {
            let currentRange = rangesDatabase[range];

            if (types.includes(currentRange.type))  {

            } else {
                types.push(currentRange.type)
            }
        }

        return types
    }

    getDifferentDepths(rangesDatabase, type) {
        let depths = []
        for (let range in rangesDatabase) {
            let currentRange = rangesDatabase[range];

            if (depths.includes(currentRange[type]["depth"])) {

            } else {
                depths.push(currentRange[type]["depth"])
            }
        }

        return depths
    }

    buildSelectionStructure(rangesDatabase, parentContainer) {
        let structure = {}
        let elements = {}
        
        rangesDatabase.forEach(item => {
            const { type, depth, position } = item;

            if (!structure[type]) {
                structure[type] = {}
                // build type container
                let typeContainer = this.createTypeElement(parentContainer, type)
                elements[type] = typeContainer
            }

            if (!structure[type][depth]) {
                structure[type][depth] = {}
                let depthContainer = this.createDepthElement(elements[type], depth)
                elements[type][depth] = depthContainer
            }

            structure[type][depth][position] = item
            this.createRangeElement(elements[type][depth], position)
        });

        console.log(elements)

        this.setListeners(elements)

        return structure
    }

    createTypeElement(parentContainer, type) {
        let typeContainer = document.createElement("div");
        let typeHeading = document.createElement("h3");
        typeHeading.innerText = type

        typeContainer.className = "type-container"

        typeContainer.appendChild(typeHeading)
        parentContainer.appendChild(typeContainer)

        return typeContainer
    }

    createDepthElement(parentContainer, depth) {
        let depthContainer = document.createElement("div");
        let depthHeading = document.createElement("h4");
        depthHeading.innerText = depth

        depthContainer.className = "depth-container"

        depthContainer.appendChild(depthHeading)

        if (parentContainer) {

            parentContainer.appendChild(depthContainer)
        }

        return depthContainer
    }

    createRangeElement(parentContainer, position) {
        let posisitonList = document.createElement("ul")
        let positionEl = document.createElement("li")
        positionEl.innerText = position
        posisitonList.appendChild(positionEl)
        parentContainer.appendChild(posisitonList)
    }

    toggleHidden(clickableEl, elToHide) {
        clickableEl.addEventListener("click", () => {
            console.log(clickableEl, elToHide)
        });
    };

    setListeners(elements) {
        for (let typeEl in elements) {
            let currentTypeEl = elements[typeEl];
            for (let depthEl in currentTypeEl) {
                let currentDepthEl = currentTypeEl[depthEl]
                this.toggleHidden(currentTypeEl, currentDepthEl)
            }

        }
    }
}