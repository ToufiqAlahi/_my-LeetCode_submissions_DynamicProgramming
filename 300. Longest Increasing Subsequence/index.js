/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0;

    let subSequence = new Array(nums.length).fill(1);
    let maxSoFar = 1;
    for (let j = 1; j < nums.length; j++) {

        for (let i = 0; i < j; i++) {
            if (nums[j] > nums[i]) {
                subSequence[j] = Math.max(subSequence[i] + 1, subSequence[j]);
            }

        }
        maxSoFar = Math.max(maxSoFar, subSequence[j]);

    }

    return maxSoFar;
};

module.exports = lengthOfLIS;
