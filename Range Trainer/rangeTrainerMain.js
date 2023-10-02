console.log("range trainer  script loaded")

import { RangePicker } from "../database/rangeSelection.js";
import { DatabaseHandler } from "../database/databaseHandler.js";
import { Dealer } from "./dealer.js";
import { CardHandler } from "./cardHandler.js";

let rangesHandler = new DatabaseHandler()
let rangeSelection = new RangePicker(document.getElementById("range selection container"), rangesHandler, changeRange)
let dealer = new Dealer()
let cardHandler = new CardHandler()

let firstCardEl = document.getElementById("first card")
let secondCardEl = document.getElementById("second card")

let hands = dealer.dealHands(1)
let hand = hands[0]
let practiceRangeInfo = rangesHandler.ranges[0]
let practiceRange = practiceRangeInfo.range

cardHandler.refreshCardDisplay(hand, firstCardEl, secondCardEl)

let outputEls = {
    "attempts": document.getElementById("attempts output"),
    "correct": document.getElementById("correct output"),
    "incorrect": document.getElementById("incorrect output"),
}

let playerScore = {
    "attempts": 0,
    "correct": 0,
    "incorrect": 0,
}

let raiseButton = document.getElementById("raise button")
let callButton = document.getElementById("call button")
let foldButton = document.getElementById("fold button")

raiseButton.addEventListener("click", () => {
    if (isHandInRange(hand["Combo"], "raise", practiceRange)) {
        playerScore.correct += 1;
    } else {
        playerScore.incorrect += 1;
    }
    
    playerScore.attempts += 1;
    updatePlayerScore()

    newHand()
})

callButton.addEventListener("click", () => {
    if (isHandInRange(hand["Combo"], "call", practiceRange)) {
        playerScore.correct += 1;
    } else {
        playerScore.incorrect += 1;
    }
    
    playerScore.attempts += 1;
    updatePlayerScore()
    
    newHand()
})

foldButton.addEventListener("click", () => {
    if (isHandInRange(hand["Combo"], "fold", practiceRange)) {
        playerScore.correct += 1;
    } else {
        playerScore.incorrect += 1;
    }
    
    playerScore.attempts += 1;
    updatePlayerScore()

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
    
    console.log(combo, action, rangeActions, range)
    
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

function updatePlayerScore() {
    outputEls.correct.innerText = playerScore.correct
    outputEls.incorrect.innerText = playerScore.incorrect
    outputEls.attempts.innerText = playerScore.attempts
}

function changeRange(range) {
    practiceRange = range.range
    console.log("change range", practiceRange)
}