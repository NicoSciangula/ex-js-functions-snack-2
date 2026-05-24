const callBack = (t) => setTimeout(() => console.log("Tempo Scaduto!"), t);

function creaTimer(time) {
  return callBack(time);
}

creaTimer(4000);
