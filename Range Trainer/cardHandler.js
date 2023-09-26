export class CardHandler {
    constructor () {
        this.cardImgPaths = {
            "Ac": "./Assets/Simple Cards/Ac.png", "Ad": "./Assets/Simple Cards/Ad.png", "Ah": "./Assets/Simple Cards/Ah.png", "As": "./Assets/Simple Cards/As.png",
            "Kc": "./Assets/Simple Cards/Kc.png", "Kd": "./Assets/Simple Cards/Kd.png", "Kh": "./Assets/Simple Cards/Kh.png", "Ks": "./Assets/Simple Cards/Ks.png",
            "Qc": "./Assets/Simple Cards/Qc.png", "Qd": "./Assets/Simple Cards/Qd.png", "Qh": "./Assets/Simple Cards/Qh.png", "Qs": "./Assets/Simple Cards/Qs.png",
            "Jc": "./Assets/Simple Cards/Jc.png", "Jd": "./Assets/Simple Cards/Jd.png", "Jh": "./Assets/Simple Cards/Jh.png", "Js": "./Assets/Simple Cards/Js.png",
            "Tc": "./Assets/Simple Cards/Tc.png", "Td": "./Assets/Simple Cards/Td.png", "Th": "./Assets/Simple Cards/Th.png", "Ts": "./Assets/Simple Cards/Ts.png",
            "9c": "./Assets/Simple Cards/9c.png", "9d": "./Assets/Simple Cards/9d.png", "9h": "./Assets/Simple Cards/9h.png", "9s": "./Assets/Simple Cards/9s.png",
            "8c": "./Assets/Simple Cards/8c.png", "8d": "./Assets/Simple Cards/8d.png", "8h": "./Assets/Simple Cards/8h.png", "8s": "./Assets/Simple Cards/8s.png",
            "7c": "./Assets/Simple Cards/7c.png", "7d": "./Assets/Simple Cards/7d.png", "7h": "./Assets/Simple Cards/7h.png", "7s": "./Assets/Simple Cards/7s.png",
            "6c": "./Assets/Simple Cards/6c.png", "6d": "./Assets/Simple Cards/6d.png", "6h": "./Assets/Simple Cards/6h.png", "6s": "./Assets/Simple Cards/6s.png",
            "5c": "./Assets/Simple Cards/5c.png", "5d": "./Assets/Simple Cards/5d.png", "5h": "./Assets/Simple Cards/5h.png", "5s": "./Assets/Simple Cards/5s.png",
            "4c": "./Assets/Simple Cards/4c.png", "4d": "./Assets/Simple Cards/4d.png", "4h": "./Assets/Simple Cards/4h.png", "4s": "./Assets/Simple Cards/4s.png",
            "3c": "./Assets/Simple Cards/3c.png", "3d": "./Assets/Simple Cards/3d.png", "3h": "./Assets/Simple Cards/3h.png", "3s": "./Assets/Simple Cards/3s.png",
            "2c": "./Assets/Simple Cards/2c.png", "2d": "./Assets/Simple Cards/2d.png", "2h": "./Assets/Simple Cards/2h.png", "2s": "./Assets/Simple Cards/2s.png",
        };
    };

    refreshCardDisplay(hand, firstCardElement, secondCardElement) {
        // function to display the input hand to the screen.
        this.errorChecking(hand)
        firstCardElement.src = this.cardImgPaths[hand["First Card"]];
        secondCardElement.src = this.cardImgPaths[hand["Second Card"]];
    };

    errorChecking(hand) {
        // check if the input hand is and object and is not empty
        if (typeof hand === 'object' && hand !== null) {
            // check if the hand object has the valid keys for the hand to be displayed
            if (!("First Card" in hand && "Second Card" in hand)) {
                console.error('incorrect hand format. Card names are missing for the input hand: hand = {"First Card": "Xx", "Second Card": "Xx", "Combo": "XXx"}');
            } else {
                if (hand["First Card"] === hand["Second Card"]) {
                    console.error('The input hand is invalid as the first and second cards are the same');
                }
            };
        } else {
            console.log(hand)
            console.error('The input hand to be displayed is not a valid OBJECT with the form: hand = {"First Card": "Xx", "Second Card": "Xx", "Combo": "XXx"}');
        };
    };
}
