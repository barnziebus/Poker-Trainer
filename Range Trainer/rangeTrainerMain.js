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
let practiceRangeInfo = rangesHandler.ranges[0]
let practiceRange = rangesHandler.ranges[0]["range"]

cardHandler.refreshCardDisplay(hand, firstCardEl, secondCardEl)



let raiseButton = document.getElementById("raise button")
raiseButton.addEventListener("click", () => {

    if (hand["Combo"] in practiceRange) {
        console.log("correct")
    }   else {
        console.log("incorrect")
    }

    newHand()
})

function newHand() {
    hands = dealer.dealHands(1)
    hand = hands[0]

    cardHandler.refreshCardDisplay(hand, firstCardEl, secondCardEl)
}