export class ComboCell{
    constructor(parentContainer, cellName, cellPercentages) {
        this.parentContainer = parentContainer;
        this.name = cellName;
        this.selected = false;

        this.cellElements = {};
        this.percentages = {raise: 0, call: 0, fold: 0}

        this.createCell(parentContainer);
        this.setCellPercentages(cellPercentages);
        this.setBackgroundCol()
    }

    createCell(parentContainer) {
        let cellContainer = this.newCellContainer();
        this.newNameElement(cellContainer);
        this.newPercentageElement(cellContainer);

        parentContainer.appendChild(cellContainer);

        this.cellElements['container'] = cellContainer
    }

    newCellContainer() {
        let cellContainer = document.createElement("div");
        cellContainer.id = this.name;
        cellContainer.classList.add("cell-container");

        this.cellElements["container"] = cellContainer

        this.setBackgroundCol(cellContainer)

        cellContainer.addEventListener("click", () => {
            this.setCellSelected()
        })

        return cellContainer;
    }

    newNameElement(cellContainer) {
        let cellNameEl = document.createElement("p");
        cellNameEl.innerText = this.name;
        cellNameEl.classList.add("cell-percentage");

        this.cellElements["name"] = cellNameEl

        cellContainer.appendChild(cellNameEl);
    }

    newPercentageElement(cellContainer) {
        let cellPercentageEl = document.createElement("p");
        cellPercentageEl.innerText = "0%";
        cellPercentageEl.classList.add("cell-percentage");

        this.cellElements["percentage"] = cellPercentageEl

        cellContainer.appendChild(cellPercentageEl);
    }

    setCellSelected() {
        if (this.selected) {
            this.cellElements.container.style.border = ""
            this.selected = false
        } else {
            this.cellElements.container.style.border = "solid red 2px"
            this.selected = true
        }
    }

    setCellPercentages() {
        let raise = this.percentages.raise ?? 0;
        let call = this.percentages.call ?? 0;
        let fold = 100 - raise - call;
        

        let text = `${raise}:${call}:${fold}`;
        this.cellElements["percentage"].innerText = text;
    }

    setBackgroundCol() {
        // set the inital background colours for the suited, off suit and pairs
        if (this.name.charAt(this.name.length - 1) === "s") {
            this.cellElements['container'].classList.add("suited")
        } else if (this.name.charAt(this.name.length - 1) === "o") {
            this.cellElements['container'].classList.add("off-suit")
        } else {
            this.cellElements['container'].classList.add("pair")
        }

        // adjust the coulors of the cells with specific actions
        let raise = this.percentages.raise ?? 0;
        let call = this.percentages.call ?? 0;
        let fold = this.percentages.fold ?? 100;

        let backgroundCSS = ""

        if (raise === 0 && call === 0 && fold === 0) {
            this.cellElements["container"].style.background = backgroundCSS;
        } else {
            backgroundCSS = `linear-gradient(to right, 
                #941414 0%, #941414 ${raise}%,
                #1f9414 ${raise}%, #1f9414 ${raise + call}%,
                #143c94 ${raise + call}%, #143c94 100%)`
            
            this.cellElements["container"].style.background = backgroundCSS;
        }       
    }

    increasePercentage(action, increment) {
        this.percentages[action] += increment;

        let raise = this.percentages.raise ?? 0;
        let call = this.percentages.call ?? 0;

        if (raise + call > 100) {this.percentages[action] = 100}
        console.log(this.name, this.percentages)

        this.setCellPercentages();
        this.setBackgroundCol()
    }

    decreasePercentage(action, increment) {
        this.percentages[action] -= increment;

        let raise = this.percentages.raise ?? 0;
        let call = this.percentages.call ?? 0;

        if (raise + call < 0) {this.percentages[action] = 0}
        console.log(this.percentages)

        this.setCellPercentages();
        this.setBackgroundCol()
    }
}