let contatore = 0;

const interval = (time) => {
  setInterval(() => {
    contatore++;
    console.log(`Contatore: ${contatore}`);
  }, time);
};

function creaContatore(time) {
  interval(time);
}

creaContatore(1000);
