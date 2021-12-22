/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

var canReach = function (arr, start) {

    if (arr[start] === -1 || start >= arr.length || start < 0) return false;

    if (!arr[start]) return true;

    const left = start - arr[start];
    const right = arr[start] + start;
    arr[start] = -1;

    return (canReach(arr, right) || canReach(arr, left));
};


module.exports = canReach;


/**
var canReach = function (arr, start) {
    let q = [start];
    let n = arr.length;
    while (q.length > 0) {
        let current = q.shift();
        if (arr[current] === 0)
            return true;
        if (arr[current] < 0)
            continue;
        if (current - arr[current] >= 0)
            q.push(current - arr[current]);

        if (current + arr[current] < n)
            q.push(current + arr[current]);
        arr[current] *= -1;
    }
    return false;
};

*/
