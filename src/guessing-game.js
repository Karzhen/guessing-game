class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentValue = Math.round((this.min + this.max)/2);
        return this.currentValue;
    }

    lower() {
        return this.max = this.currentValue;
    }

    greater() {
        return this.min = this.currentValue;
    }
}

module.exports = GuessingGame;
