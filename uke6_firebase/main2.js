const skjema = document.querySelector("#skjema");
const impNavn = document.querySelector("#impNavn");
const impTelefon = document.querySelector("#impTelefon");
const impEpost = document.querySelector("#impEpost");
const secKontakter = document.querySelector("#secKontakter");

const db = firebase.database();
const kontakter = db.ref("kontakter");


function registrerKontakt(hendelse){
  hendelse.preventDefault();
  const key = inpTelefon.value;
  const data = {
    "navn": inpNavn.value,
    "epost": inpEpost.value
  };
  const kontakt = kontakter.child(key);
  kontakt.set(data);

  skjema.reset();
}

skjema.addEventListener("submit",registrerKontakt);

function visKontakt(snapshot){
  const telefon = snapshot.key;
  const kontakt = snapshot.val();
  secKontakter.innerHTML = `
  <div>${kontakt.navn}</div>
  <div>${telefon}</div>
  <div>${kontakt.epost}</div>`;
}
kontakter.on("child_added",visKontakt);

//function f(x){ document.write(x*x);} skriv f(ett tall) for å se svar//
