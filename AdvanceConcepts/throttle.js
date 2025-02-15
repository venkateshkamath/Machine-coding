//execute after certain interval of time -> setInterval
function myThrottler(fn, delay) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
      console.log(now-lastCall);
    }
  };
}

const throttler = myThrottler(() => {
  console.log("Throttler request");
}, 2000);

window.addEventListener("scroll", throttler);
