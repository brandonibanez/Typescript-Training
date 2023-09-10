"use strict";
let nums = [11, 22, 33, 44, 55];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
nums.push(66);
for (let temp of nums) {
    console.log(temp);
}
