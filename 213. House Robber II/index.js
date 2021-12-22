/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    function mate(part) {
        if (!part.length) return 0;
        if (part.length === 1) return part[0];
        if (part.length === 2) return Math.max(part[0], part[1]);
        const loot = [part[0], Math.max(part[0], part[1])];
        for (let i = 2; i < part.length; i++) {
            loot[i] = Math.max(part[i] + loot[i - 2], loot[i - 1]);
        }
        return loot[loot.length - 1];
    }
    return Math.max(mate(nums.slice(0, nums.length - 1)), mate(nums.slice(1)));
};


module.exports = rob;
