/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {

    return minCoins(coins, coins.length, amount);
};


function minCoins(coins, m, V) {

    // table[i] will be storing
    // the minimum number of coins
    // required for i value. So
    // table[V] will have result

    let table = new Array(V + 1);
    for (let i = 0; i < V + 1; i++) {
        table[i] = 0;
    }
    // Initialize all table values as Infinite
    for (let i = 1; i <= V; i++) {
        table[i] = Number.MAX_VALUE;
    }
    // Compute minimum coins required for all
    // values from 1 to V
    for (let i = 1; i <= V; i++) {
        // Go through all coins smaller than i
        for (let j = 0; j < m; j++)
            if (coins[j] <= i) {
                let sub_res = table[i - coins[j]];
                if (sub_res != Number.MAX_VALUE
                    && sub_res + 1 < table[i])
                    table[i] = sub_res + 1;
            }
    }

    if (table[V] == Number.MAX_VALUE)
        return -1;

    return table[V];
};

/**
// Tabulation solution
// Let's create an array where array[i] = The least number of coins to make i
var coinChange = function (coins, amount) {
    // Array to hold the number of coins needed to make each amount
    const dynamicArray = Array(amount + 1).fill(Infinity);
    // To make 0 you would not use any coins
    dynamicArray[0] = 0;

    // Fill the array with number of coins to make each i amount
    for (let i = 1; i < dynamicArray.length; i++) {
        // Find coins that can make amount i
        for (let coin of coins) {
            // If a coin can make the current amount check if this coin
            // is used in the sequence that uses fewest number of coins
            // to make this amount
            if (i - coin >= 0) dynamicArray[i] = Math.min(dynamicArray[i], dynamicArray[i - coin] + 1);
        }
    } dynamicArray
    return dynamicArray[amount] === Infinity ? -1 : dynamicArray[amount];
};

*/

