function contoAllaRovescia(n) {
  let timer = n;

  const interval = setInterval(() => {
    console.log(`Tempo rimanente: ${timer}`);
    if (timer === 0) {
      clearInterval(interval);
      console.log("Tempo Scaduto");
      return;
    }

    timer--;
  }, 1000);
}
contoAllaRovescia(10);
