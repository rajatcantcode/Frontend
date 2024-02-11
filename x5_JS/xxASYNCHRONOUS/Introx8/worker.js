onmessage = function (data) {
  let nums = data.data;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      sum += nums[i];
    }
  }
  postMessage(sum);
};
