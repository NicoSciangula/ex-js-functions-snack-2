function stampaOgniSecondo(mess, stop) {
  const intervallo = setInterval(() => messaggioDaStampare(mess), 1000);

  stop(intervallo);
}

const messaggioDaStampare = (messaggio) => console.log(messaggio);

const fermaMess = (funDaStop) =>
  setTimeout(() => clearInterval(funDaStop), 5000);

stampaOgniSecondo("ciao", fermaMess);
