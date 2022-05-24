/*DOM Element*/
const getRegions = () => document.querySelector("#regions");
const getProvinces = () => document.querySelector("#provinces");

const getProvincesList = (region) => {
  switch (region) {
    case "Abruzzo":
      return ["Chieti", "L'Aquila", "Pescara", "Teramo"];
    case "Basilicata":
      return ["Matera", "Potenza"];
    case "Calabria":
      return ["Catanzaro", "Cosenza", "Crotone", "Reggio Calabria"];
    case "Campania":
      return ["Avellino", "Benevento", "Caserta", "Napoli", "Salerno"];
    case "Emilia Romagna":
      return [
        "Bologna",
        "Ferrara",
        "Forlì",
        "Modena",
        "Parma",
        "Piacenza",
        "Ravenna",
        "Reggio Emilia",
        "Rimini",
      ];
    case "Friuli-Venezia Giulia":
      return ["Gorizia", "Pordenone", "Trieste", "Udine"];
    case "Lazio":
      return ["Frosinone", "Latina", "Rieti", "Roma", "Viterbo"];
    default:
      return "Seleziona una provincia";
  }
};

getRegions().addEventListener("change", (event) => {
  getProvinces().disabled = false;
  while (getProvinces().childElementCount > 1) {
    getProvinces().removeChild(getProvinces().lastChild);
  }

  getProvincesList(event.target.value).forEach((item) => {
    getProvinces().innerHTML += `<option value="${item}">${item}</option>`;
  });
});
