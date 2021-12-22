/**
 * @param {number[]} nums
 * @return {number}
 */


//greedy approach!

var jump = function (nums) {

    let newMax = 0;
    let jump = 0;
    let oldMax = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        // Keep track of the farthest jump

        newMax = Math.max(newMax, i + nums[i]);

        // increasing the number of jumps by 1, when it reaches the index with the most jumps before!

        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }

    return jump;

};


module.exports = jump;
