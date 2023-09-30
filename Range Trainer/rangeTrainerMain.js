console.log("range trainer  script loaded")

import { RangePicker } from "../database/rangeSelection.js";
import { DatabaseHandler } from "../database/databaseHandler.js";
import { Dealer } from "./dealer.js";
import { CardHandler } from "./cardHandler.js";

let rangeGrid = null
let rangesHandler = new DatabaseHandler()
let rangeSelection = new RangePicker(document.getElementById("range selection container"), rangesHandler, rangeGrid)
let dealer = new Dealer()
let cardHandler = new CardHandler()

let firstCardEl = document.getElementById("first card")
let secondCardEl = document.getElementById("second card")

let hands = dealer.dealHands(1)
let hand = hands[0]
let practiceRangeInfo = rangesHandler.ranges[19]
let practiceRange = practiceRangeInfo.range

cardHandler.refreshCardDisplay(hand, firstCardEl, secondCardEl)



let raiseButton = document.getElementById("raise button")
let callButton = document.getElementById("call button")
let foldButton = document.getElementById("fold button")

raiseButton.addEventListener("click", () => {
    isHandInRange(hand["Combo"], "raise", practiceRange)
    newHand()
})

callButton.addEventListener("click", () => {
    isHandInRange(hand["Combo"], "call", practiceRange)
    newHand()
})

foldButton.addEventListener("click", () => {
    isHandInRange(hand["Combo"], "fold", practiceRange)
    newHand()
})

function newHand() {
    hands = dealer.dealHands(1)
    hand = hands[0]

    cardHandler.refreshCardDisplay(hand, firstCardEl, secondCardEl)
}

function isHandInRange(combo, action, range) {
    let rangeActions = {"raise": 0, "call":0, "fold": 100}
    
    if (combo in range) {
        rangeActions[action] += range[combo][action] 
        rangeActions["fold"] -= range[combo][action] 
    }
    
    if (rangeActions[action] > 0) {
        return true
        //console.log("correct")
        //console.log(rangeActions)
    } else {
        return false
        //console.log("incorrect");
        //console.log(rangeActions)
    }
}