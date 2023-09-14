console.log("Grid Cell")

export class GridCell{
    constructor(parentContainer, cellName, cellPercentages) {
        this.parentContainer = parentContainer;
        this.name = cellName;
        this.cellSelected = false;

        this.cellElements = {};

        this.createCell(parentContainer);
        this.setCellPercentages(cellPercentages);
        this.setBackgroundCol(cellPercentages)
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
        if (this.cellSelected) {
            this.cellElements.container.style.border = ""
            this.cellSelected = false
        } else {
            this.cellElements.container.style.border = "solid red 2px"
            this.cellSelected = true
        }
    }

    setCellPercentages(cellPercentages) {
        let raise = cellPercentages.raise ?? 0;
        let call = cellPercentages.call ?? 0;
        let fold = cellPercentages.fold ?? 0;
        

        let text = `${raise}:${call}:${fold}`;
        this.cellElements["percentage"].innerText = text;
    }

    setBackgroundCol(cellPercentages) {
        // set the inital background colours for the suited, off suit and pairs
        if (this.name.charAt(this.name.length - 1) === "s") {
            this.cellElements['container'].classList.add("suited")
        } else if (this.name.charAt(this.name.length - 1) === "o") {
            this.cellElements['container'].classList.add("off-suit")
        } else {
            this.cellElements['container'].classList.add("pair")
        }

        // adjust the coulors of the cells with specific actions
        let raise = cellPercentages.raise ?? 0;
        let call = cellPercentages.call ?? 0;
        let fold = cellPercentages.fold ?? 0;

        let backgroundCSS = ""

        if (raise === 0 && call === 0 && fold === 0) {
            backgroundCSS = ""
        } else {
            backgroundCSS = `linear-gradient(to right, 
                #941414 0%, #941414 ${raise}%, 
                #1f9414 ${raise}%, #1f9414 ${raise + call}%,
                #143c94 ${raise + call}%, #143c94 100%)`
            
            this.cellElements["container"].style.background = backgroundCSS;
        }
                
    }
}

let gridContainer = document.getElementById("rangGridContainer")

const COMBOS = [	
    ['AA' , 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',],
    ['AKo', 'KK' , 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',],
    ['AQo', 'KQo', 'QQ' , 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s',],
    ['AJo', 'KJo', 'QJo', 'JJ' , 'JTs', 'J9s', 'J8s', 'J7s', 'J6s', 'J5s', 'J4s', 'J3s', 'J2s',],
    ['ATo', 'KTo', 'QTo', 'JTo', 'TT' , 'T9s', 'T8s', 'T7s', 'T6s', 'T5s', 'T4s', 'T3s', 'T2s',],
    ['A9o', 'K9o', 'Q9o', 'J9o', 'T9o', '99' , '98s', '97s', '96s', '95s', '94s', '93s', '92s',],
    ['A8o', 'K8o', 'Q8o', 'J8o', 'T8o', '98o', '88' , '87s', '86s', '85s', '84s', '83s', '82s',],
    ['A7o', 'K7o', 'Q7o', 'J7o', 'T7o', '97o', '87o', '77' , '76s', '75s', '74s', '73s', '72s',],
    ['A6o', 'K6o', 'Q6o', 'J6o', 'T6o', '96o', '86o', '76o', '66' , '65s', '64s', '63s', '62s',],
    ['A5o', 'K5o', 'Q5o', 'J5o', 'T5o', '95o', '85o', '75o', '65o', '55' , '54s', '53s', '52s',],
    ['A4o', 'K4o', 'Q4o', 'J4o', 'T4o', '94o', '84o', '74o', '64o', '54o', '44' , '43s', '42s',],
    ['A3o', 'K3o', 'Q3o', 'J3o', 'T3o', '93o', '83o', '73o', '63o', '53o', '43o', '33' , '32s',],
    ['A2o', 'K2o', 'Q2o', 'J2o', 'T2o', '92o', '82o', '72o', '62o', '52o', '42o', '32o', '22' ,], 
  ]

for (let x in COMBOS) {
    for (let y in COMBOS[x]) {
        new GridCell(gridContainer, COMBOS[x][y], {})

    }
}