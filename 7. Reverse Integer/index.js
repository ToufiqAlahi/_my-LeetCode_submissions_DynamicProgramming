/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = x < 0;
    let reversed = 0;
    if (negative) { x = x * -1; }
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (reversed > 2 ** 31 - 1) {
        return 0;
    }
    return negative ? reversed * -1 : reversed;

};
module.exports = reverse;
