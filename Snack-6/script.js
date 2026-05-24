function creaContatore(time) {
  let contatore = 0;
  return () => {
    setInterval(() => {
      contatore++;
      console.log(`Contatore: ${contatore}`);
    }, time);
  };
}

const contaSecondo = creaContatore(1000);

contaSecondo();
