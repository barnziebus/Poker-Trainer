import { Grid } from "./RangeGrid.js";

let RFI_100BB_LJ = {"Name":"RFI - 100BB - LJ", "22":{"raise":17}, "33":{"raise":17}, "44":{"raise":19}, "55":{"raise":72}, "66":{"raise":100}, "77":{"raise":100}, "88":{"raise":100}, "99":{"raise":100}, "AA":{"raise":100}, "AKs":{"raise":100}, "AQs":{"raise":100}, "AJs":{"raise":100}, "ATs":{"raise":100}, "A9s":{"raise":100}, "A8s":{"raise":100}, "A7s":{"raise":100}, "A6s":{"raise":100}, "A5s":{"raise":100}, "A4s":{"raise":100}, "A3s":{"raise":100}, "A2s":{"raise":100}, "AKo":{"raise":100}, "KK":{"raise":100}, "KQs":{"raise":100}, "KJs":{"raise":100}, "KTs":{"raise":100}, "K9s":{"raise":100}, "K8s":{"raise":100}, "K7s":{"raise":100}, "K6s":{"raise":100}, "K5s":{"raise":83}, "AQo":{"raise":100}, "KQo":{"raise":100}, "QQ":{"raise":100}, "QJs":{"raise":100}, "QTs":{"raise":100}, "Q9s":{"raise":100}, "Q8s":{"raise":91}, "AJo":{"raise":100}, "KJo":{"raise":100}, "QJo":{"raise":100}, "JJ":{"raise":100}, "JTs":{"raise":100}, "J9s":{"raise":79}, "ATo":{"raise":100}, "KTo":{"raise":24}, "QTo":{"raise":24}, "TT":{"raise":100}, "T9s":{"raise":91}, "T8s":{"raise":2}, "A9o":{"raise":12}, "98s":{"raise":15}, "87s":{"raise":16}, "76s":{"raise":19}, "65s":{"raise":24}, "54s":{"raise":17}};

let gridContainer = document.getElementById("rangGridContainer")
let rangeGrid = new Grid(gridContainer, RFI_100BB_LJ)


let clearRangeButton = document.getElementById("clear range button");
clearRangeButton.addEventListener("click", () => {
    rangeGrid.clearRange()
})