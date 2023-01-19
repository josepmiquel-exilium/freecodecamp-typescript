const enum SeatChoiceNumber {
    AISLE = 10,
    MIDDLE = 22, // if you dont assign a value, it gonna be increasing from the first value === 11
    WINDOW // 23
}

const enum SeatChoiceString {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window'
}

const enum SeatChoiceMix {
    AISLE = 'aisle',
    MIDDLE = 'middle',
    WINDOW = 'window',
    NONE = 0,
    ONE // 1
}


// Only three options are available (AISLE, MIDDLE, WINDOW)
const hcSeat = SeatChoiceNumber.MIDDLE 
