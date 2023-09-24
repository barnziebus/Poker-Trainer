// js initialisation of the range seclection bar
import { RFI_Ranges } from "./Ranges/ranges_RFI.js";

export class RangePicker{
    constructor(rangePickerContainer, rangesDbHandler, rangeGridHandler) {
        this.parentContainer = rangePickerContainer;
        this.ranges = rangesDbHandler.ranges;
        this.rangeGridHandler = rangeGridHandler;

        this.structure = this.getSelectionStructure(this.ranges);

        this.createRangeSelector(this.parentContainer, this.structure, this.ranges)
    }

    getRange(type, depth, positionName) {       
        for (let range in this.ranges) {
            let rangeInfo = this.ranges[range];

            if (rangeInfo.type === type && rangeInfo.depth === depth && rangeInfo.position === positionName) {
                        return rangeInfo.range
            };
        };
    };

    getSelectionStructure(rangesDatabase) {
        let structure = {};
        
        rangesDatabase.forEach(item => {
            const { type, depth, position } = item;

            if (!structure[type]) {
                structure[type] = {};
            }

            if (!structure[type][depth]) {
                structure[type][depth] = {};
            }

            structure[type][depth][position] = item;
        });

        return structure;
    };

    createRangeSelector(parentContainer, structure) {
        let rangeTypes = []
        for (let type in structure) {
            rangeTypes.push(type)

            let typeSelectionElements = this.createTypeSelection(parentContainer, type);
            let typeContainer = typeSelectionElements[0];
            let typeHeader = typeSelectionElements[1];


            let typeDepths = []
            for (let depth in structure[type]) {
                typeDepths.push(depth);

                let depthSelectionElement = this.createRangeDepthSelection(typeContainer, typeHeader, depth);
                let depthContainer = depthSelectionElement[0];
                let depthHeader = depthSelectionElement[1];
                
                let rangeNames = []
                for (let name in structure[type][depth]) {
                    rangeNames.push(name)
                }

                this.createRangeNameList(depthContainer, depthHeader, rangeNames, type, depth)
            }
        }
    }

    createTypeSelection(parentContainer, typeName) {
        // create the type selection and return the type container and header element
        let typeContainer = document.createElement("div");
        let typeHeader = document.createElement("h3");
        typeHeader.innerText = typeName;

        typeContainer.appendChild(typeHeader);

        parentContainer.appendChild(typeContainer);

        return [typeContainer, typeHeader];
    }

    createRangeDepthSelection(parentContainer, parentHeader, rangeDepth) {
        let depthContainer = document.createElement("div"); // remove this container and constuct from type
        let depthHeader = document.createElement("h4");

        depthHeader.innerText = rangeDepth;

        depthContainer.appendChild(depthHeader);

        parentHeader.addEventListener("click", () => {
            if (depthContainer.style.display === 'none') {
                depthContainer.style.display = ''; //show the list appended to the type
            } else {
                depthContainer.style.display = 'none'; //hide the list appended to the type
            };
        });

        parentContainer.appendChild(depthContainer);

        return [depthContainer, depthHeader];
    };

    createRangeNameList(parentContainer, parentHeader, rangeNames, type, depth) {
        let listContainer = document.createElement("ui");

        for (let range in rangeNames) {
            let rangeName = rangeNames[range];

            this.createRangeNameSelection(listContainer, rangeName, type, depth);
        };

        parentContainer.appendChild(listContainer);

        parentHeader.addEventListener("click", () => {
            if (listContainer.style.display === 'none') {
                listContainer.style.display = ''; //show the list appended to the depth
            } else {
                listContainer.style.display = 'none'; //hide the list appended to the depth
            };
        });
    };

    createRangeNameSelection(parentContainer, rangeName, type, depth) {
        let positionEl = document.createElement("li");
        positionEl.innerText = rangeName;

        positionEl.addEventListener("click", () => {
            this.rangeGridHandler.displayRange(this.getRange(type, depth, rangeName));
        })

        parentContainer.appendChild(positionEl);
    }
}