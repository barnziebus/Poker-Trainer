export class Dealer {
    constructor() {
        this.deck = [
            "Ac", "Kc", "Qc", "Jc", "Tc", "9c", "8c", "7c", "6c", "5c", "4c", "3c", "2c",
            "As", "Ks", "Qs", "Js", "Ts", "9s", "8s", "7s", "6s", "5s", "4s", "3s", "2s",
            "Ad", "Kd", "Qd", "Jd", "Td", "9d", "8d", "7d", "6d", "5d", "4d", "3d", "2d",
            "Ah", "Kh", "Qh", "Jh", "Th", "9h", "8h", "7h", "6h", "5h", "4h", "3h", "2h",
        ];

        this.cardRanks = {"A": 12, "K": 11, "Q": 10, "J": 9, "T": 8, "9": 7, "8": 6, "7": 5, "6": 4, "5": 3, "4": 2, "3": 1, "2": 0};

        this.hands = []
        this.previousHands = this.hands
        }
  
    dealHands(numberOfPlayers = 1) {
        this.hands = []
        
        if (numberOfPlayers < 1 || numberOfPlayers > 10) {
            var errorMessage = "Number of players must be between 1 and 10";
            //document.getElementById("error-message").innerHTML = errorMessage; create error message in HTML
            throw new Error(errorMessage);
        }

        this.previousHands = this.hands

        let shuffledDeck = this.deck.sort(() => Math.random() - 0.5);
        
        for (let i=0; i<numberOfPlayers; i++) {
            let firstCard = shuffledDeck[i];
            let secondCard = shuffledDeck[i + numberOfPlayers]
            let hand = {
                "First Card": firstCard,
                "Second Card": secondCard,
                "Combo": this.defineCombo(firstCard, secondCard),
                };
            
            this.hands.push(hand);
        }

        return this.hands
    }

    defineCombo(firstCard, secondCard) {
        let suffix = '';
    
        if (firstCard.charAt(0) === secondCard.charAt(0)) {
            suffix = '';
        } else if (firstCard.charAt(firstCard.length - 1) === secondCard.charAt(firstCard.length - 1)) {
            suffix = 's';
        } else if (firstCard.charAt(firstCard.length - 1) != secondCard.charAt(firstCard.length - 1)) {
            suffix = 'o';
        }
            
    
        if (this.cardRanks[firstCard.charAt(0)] < this.cardRanks[secondCard.charAt(0)]) {
            let temp = firstCard;
            firstCard = secondCard;
            secondCard = temp;
          }
    
        return firstCard.charAt(0) + secondCard.charAt(0) + suffix;
    }
}
  