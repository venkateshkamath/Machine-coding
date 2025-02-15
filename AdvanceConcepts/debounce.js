function myDebounce(fn, delay) {
  let timeOutId;
  return function () {
    clearTimeout(timeOutId);
    console.log("timeout deleted", timeOutId);

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

const throttler = myDebounce(() => {
  console.log("Debounce request");
}, 2000);

window.addEventListener("scroll", throttler);
