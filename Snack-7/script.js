function eseguiEferma(timer, timerStop, messagge) {
  const intervallo = setInterval(() => {
    console.log(messagge);
  }, timer);

  setTimeout(() => {
    clearInterval(intervallo);
    console.log("timer fermato");
  }, timerStop);
}

eseguiEferma(1000, 6000, "Hello");
