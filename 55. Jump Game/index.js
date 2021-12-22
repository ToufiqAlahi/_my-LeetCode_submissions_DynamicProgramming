/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function (nums) {

    let lastValidIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {

        if (i + nums[i] >= lastValidIndex) {
            lastValidIndex = i;

        }
    }

    return lastValidIndex === 0;
};

// [2,3,1,1,4] shows true

//[3,2,1,0,4] shows false

module.exports = canJump;
