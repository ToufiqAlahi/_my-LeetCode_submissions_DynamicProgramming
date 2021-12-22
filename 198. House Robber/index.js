/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxRobAtNth = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < nums.length; i++) {
        maxRobAtNth.push(Math.max(nums[i] + maxRobAtNth[i - 2], maxRobAtNth[i - 1]))
    }
    return maxRobAtNth.pop();
};

module.exports = rob;
