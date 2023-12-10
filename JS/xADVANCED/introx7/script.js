// error handing
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("bhaiya 0 se divide nahi hota");
      //After error milne ke baad seedha 'catch' ke paas jaata hain error
    }
    console.log(a / b);
  } catch (err) {
    console.log(err);
  } finally {
    // Code to execute always, whether there was an exception or not
  }
}

divide(12, 0);
