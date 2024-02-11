//Web Workers
var nums = [];
let length = 1000000;
var sum = 0;
for (let i = 1; i < length; i++) {
  nums[i] = i;
  sum += nums[i];
}

// Create a new worker instance
const worker = new Worker("worker.js");

// Send data to the worker
worker.postMessage(nums);

worker.onmessage = function (event) {
  // Log the received data from the worker
  console.log(event.data);
};
