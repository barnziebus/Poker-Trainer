// Vs RFI ranges (3-bet ranges)
const VsRFI_HJvLJ_100BB = {
    type: "Vs RFI", 
    depth: "100BB", 
    position: "HJ vs LJ", 
    name: "Vs RFI - 100BB - HJ vs LJ", 
    range: {
        "77":{"raise":25},"88":{"raise":25},"99":{"raise":25},"AA":{"raise":100},"AKs":{"raise":100},"AQs":{"raise":100},"AJs":{"raise":100},"ATs":{"raise":100},"A9s":{"raise":50},"A8s":{"raise":50},"A7s":{"raise":50},"A6s":{"raise":25},"A5s":{"raise":100},"A4s":{"raise":100},"A3s":{"raise":50},"AKo":{"raise":100},"KK":{"raise":100},"KQs":{"raise":100},"KJs":{"raise":100},"KTs":{"raise":100},"K5s":{"raise":25},"AQo":{"raise":100},"KQo":{"raise":75},"QQ":{"raise":100},"JJ":{"raise":100},"TT":{"raise":75},"65s":{"raise":25},"54s":{"raise":25}
    }
}

const VsRFI_COvLJ_100BB = {
    type: "Vs RFI", 
    depth: "100BB", 
    position: "CO vs LJ", 
    name: "Vs RFI - 100BB - CO vs LJ", 
    range: {
        "77":{"raise":25},"88":{"raise":25},"99":{"raise":25},"AA":{"raise":100},"AKs":{"raise":100},"AQs":{"raise":100},"AJs":{"raise":100},"ATs":{"raise":100},"A9s":{"raise":75},"A8s":{"raise":50},"A7s":{"raise":50},"A5s":{"raise":100},"A4s":{"raise":100},"A3s":{"raise":50},"AKo":{"raise":100},"KK":{"raise":100},"KQs":{"raise":100},"KJs":{"raise":100},"KTs":{"raise":100},"K5s":{"raise":25},"AQo":{"raise":100},"KQo":{"raise":100},"QQ":{"raise":100},"QJs":{"raise":100},"AJo":{"raise":25},"JJ":{"raise":100},"TT":{"raise":100},"76s":{"raise":25},"65s":{"raise":25},"54s":{"raise":25}
    }
}

const VsRFI_BTvLJ_100BB = {
    type: "Vs RFI", 
    depth: "100BB", 
    position: "BTN vs LJ", 
    name: "Vs RFI - 100BB - BTN vs LJ", 
    range: {
        "99":{"raise":25},"AA":{"raise":100},"AKs":{"raise":100},"AQs":{"raise":100},"AJs":{"raise":100},"ATs":{"raise":100},"A9s":{"raise":25},"A8s":{"raise":25},"A7s":{"raise":25},"A5s":{"raise":100},"A4s":{"raise":100},"A3s":{"raise":100},"A2s":{"raise":75},"AKo":{"raise":100},"KK":{"raise":100},"KQs":{"raise":100},"KJs":{"raise":100},"KTs":{"raise":100},"K6s":{"raise":25},"K5s":{"raise":50},"AQo":{"raise":100},"KQo":{"raise":100},"QQ":{"raise":100},"QJs":{"raise":100},"AJo":{"raise":50},"KJo":{"raise":25},"JJ":{"raise":100},"TT":{"raise":50},"65s":{"raise":25},"54s":{"raise":25}
    }
}

const VsRFI_SBvLJ_100BB = {
    type: "Vs RFI", 
    depth: "100BB", 
    position: "SB vs LJ", 
    name: "Vs RFI - 100BB - SB vs LJ", 
    range: {
        "77":{"raise":25},"88":{"raise":25},"99":{"raise":50},"AA":{"raise":100},"AKs":{"raise":100},"AQs":{"raise":100},"AJs":{"raise":100},"ATs":{"raise":75},"A5s":{"raise":75},"A4s":{"raise":100},"A3s":{"raise":50},"AKo":{"raise":100},"KK":{"raise":100},"KQs":{"raise":100},"KJs":{"raise":100},"KTs":{"raise":75},"AQo":{"raise":75},"KQo":{"raise":50},"QQ":{"raise":100},"QJs":{"raise":100},"QTs":{"raise":50},"JJ":{"raise":100},"JTs":{"raise":25},"TT":{"raise":50},"87s":{"raise":25},"76s":{"raise":25},"65s":{"raise":50},"54s":{"raise":50}
    }
}

const VsRFI_BBvLJ_100BB = {
    type: "Vs RFI", 
    depth: "100BB", 
    position: "BB vs LJ", 
    name: "Vs RFI - 100BB - BB vs LJ", 
    range: {
        "22":{"call":100},"33":{"call":100},"44":{"call":100},"55":{"call":100},"66":{"call":100},"77":{"call":100},"88":{"call":100},"99":{"call":100},"AA":{"raise":100},"AKs":{"raise":100},"AQs":{"raise":50,"call":50},"AJs":{"call":100},"ATs":{"call":100},"A9s":{"call":100},"A8s":{"call":100},"A7s":{"call":100},"A6s":{"call":100},"A5s":{"call":100},"A4s":{"call":100},"A3s":{"raise":25,"call":75},"A2s":{"raise":25,"call":75},"AKo":{"raise":100},"KK":{"raise":100},"KQs":{"raise":25,"call":75},"KJs":{"call":100},"KTs":{"call":100},"K9s":{"call":100},"K8s":{"call":100},"K7s":{"call":100},"K6s":{"raise":25,"call":75},"K5s":{"raise":25,"call":75},"K4s":{"raise":25,"call":75},"K3s":{"raise":25,"call":75},"K2s":{"raise":25,"call":75},"AQo":{"call":100},"KQo":{"call":100},"QQ":{"raise":75,"call":25},"QJs":{"raise":50,"call":50},"QTs":{"raise":50,"call":50},"Q9s":{"raise":50,"call":50},"Q8s":{"call":100},"Q7s":{"call":100},"Q6s":{"raise":25,"call":75},"Q5s":{"raise":25,"call":75},"Q4s":{"raise":25,"call":75},"Q3s":{"call":100},"Q2s":{"call":100},"AJo":{"call":100},"KJo":{"call":100},"QJo":{"call":100},"JJ":{"call":100},"JTs":{"raise":25,"call":75},"J9s":{"call":100},"J8s":{"call":100},"J7s":{"call":100},"J6s":{"call":100},"J5s":{"call":75},"J4s":{"call":25},"ATo":{"call":100},"KTo":{"raise":25,"call":75},"QTo":{"call":100},"JTo":{"call":100},"TT":{"call":100},"T9s":{"raise":25,"call":75},"T8s":{"call":100},"T7s":{"call":100},"T6s":{"call":100},"A9o":{"call":100},"T9o":{"call":50},"98s":{"call":100},"97s":{"call":100},"96s":{"call":100},"95s":{"call":100},"A8o":{"call":75},"98o":{"call":50},"87s":{"raise":50,"call":50},"86s":{"call":100},"85s":{"call":100},"84s":{"call":100},"A7o":{"call":75},"87o":{"call":50},"76s":{"raise":50,"call":50},"75s":{"call":100},"74s":{"call":100},"76o":{"call":50},"65s":{"raise":50,"call":50},"64s":{"call":100},"63s":{"call":100},"A5o":{"raise":25,"call":75},"65o":{"call":50},"54s":{"raise":50,"call":50},"53s":{"call":100},"52s":{"call":100},"A4o":{"raise":25,"call":75},"54o":{"call":50},"43s":{"call":100},"42s":{"call":100},"32s":{"call":100}
    }
}

let VS_RFI_Ranges = [
    VsRFI_HJvLJ_100BB, VsRFI_COvLJ_100BB, VsRFI_BTvLJ_100BB, VsRFI_SBvLJ_100BB, VsRFI_BBvLJ_100BB
];

export { VS_RFI_Ranges };