import { ComboCell } from "./rangeCell.js"
export class Grid{
    constructor(gridContainer, rangeDBhandler) {
        this.rangeDBhandler = rangeDBhandler

        this.cells = [];

        this.buildGrid(gridContainer);
        this.addUI()

        this.action = "raise"

        let storedRange = this.loadRange()

        if (storedRange) {
            this.displayRange(storedRange)
        }
    }

    buildGrid(gridContainer) {
        for (let x in COMBOS) {
            for (let y in COMBOS[x]) {
                let cell = new ComboCell(gridContainer, COMBOS[x][y], {})
                this.cells.push(cell)
            }
        }
    }

    displayRange(range) {
        this.clearRange()
        for (let cell of this.cells) {
            for (let hand in range) {
                if (cell["name"] === hand) {
                    cell.percentages = range[hand];
                    cell.setBackgroundCol()
                    cell.setCellPercentages()
                };
            };
        };
    }

    clearRange() {
        for (let cell of this.cells) {
            cell.percentages = {raise: 0, call: 0, fold: 0}
            cell.setBackgroundCol()
            cell.setCellPercentages()
        };
    }
    
    deselectAll() {
        for (let cell of this.cells) {
            if (cell.selected === true) {
                cell.setCellSelected()
            }
        };
    }

    saveRange() {
        let savedRange = this.getRange()
        console.log(savedRange)

        let savedRangeJSON = JSON.stringify(savedRange)
        localStorage.setItem("range", savedRangeJSON)
    }

    loadRange() {
        let savedRangeJSON = localStorage.getItem("range");
        if (savedRangeJSON !== null) {
            let savedRange = JSON.parse(savedRangeJSON)
            return savedRange
        } 
    }

    getRange() {
        let savedRange = {}
        for (let cell of this.cells) {
            if (cell.percentages["raise"] > 0 || cell.percentages['call'] > 0) {
                let percentages = {}

                if (cell.percentages["raise"] > 0) {
                    percentages["raise"] = cell.percentages["raise"];
                };
                if (cell.percentages["call"] > 0) {
                    percentages["call"] = cell.percentages["call"];
                };


                savedRange[cell.name] = percentages

            }
        };

        return savedRange
    }

    increasePercentage(action, increment) {
        for (let i in this.cells) {
            let cell = this.cells[i]
            if (cell.selected) {
                cell.increasePercentage(action, increment)
            }
        }
    }
    
    decreasePercentage(action, decrement) {
        for (let i in this.cells) {
            let cell = this.cells[i]
            if (cell.selected) {
                cell.decreasePercentage(action, decrement)
            }
        }
    }

    addUI() {
        document.addEventListener("keydown", (event) => {
            //console.log(event)
            if (event.key === "ArrowRight") {
                this.increasePercentage(this.action, 25)
            }
            if (event.key === "ArrowLeft") {
                this.decreasePercentage(this.action, 25)
            }
            if (event.key === "Escape") {
                console.log("esc")
                this.deselectAll()
            }
        }) 
    }
}

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