// database handler class
// import ranges to be appeneded to the dbhandler database of ranges
import { RFI_Ranges } from "./Ranges/ranges_RFI.js";
import { VS_RFI_Ranges } from "./Ranges/ranges_3-Bet.js";

export class DatabaseHandler{
    constructor() {
        this.ranges = []
        this.buildDatabase()

        this.activeRange = this.ranges[0]
        this.previousRange = this.ranges[1]
        this.previousRanges = []
    }

    buildDatabase() {
        //Push all RFI ranges to the database array
        for (let range in RFI_Ranges) {
            this.ranges.push(RFI_Ranges[range])
        }
        for (let range in VS_RFI_Ranges) {
            this.ranges.push(VS_RFI_Ranges[range])
        }
    }

    setActiveRange(rangeInfo) {
        // sets the active range based on the name input. 
        // calls the set ranges to set the previous and active range.
        console.log("Set Range - Method Called");
        let database = this.ranges

        for (let I in database) {
            let range = database[I]
            if (rangeInfo.name === range.name) {
                console.log(`Active Range Set: ${range.name}`, range)
                this.setRanges(range) //sets the active range and updates the previous
            } 
        }
    }

    setRanges(range) {
        //set the previous range and append to previous ranges array to track used ranges
        this.previousRange = this.activeRange
        //this.previousRanges.push(this.previousRange)

        this.activeRange = range
    }

    getRange() {
        console.log("Get Range - Method Called");
    }

    getRandomRange() {
        console.log("Get Random Range - Method Called")
    }
}