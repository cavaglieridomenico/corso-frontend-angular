export const getGreeting = (time) => {
  if (time >= 6 && time < 14) return "Buongiorno";
  if (time >= 14 && time < 18) return "Buon pomeriggio";
  if (time >= 18 && time < 22) return "Buonasera";
  return "Buonanotte";
};

export const getMonth = (mounth) => {
  switch (mounth) {
    case 0:
      return "Gennaio";
    case 1:
      return "Febbraio";
    case 2:
      return "Marzo";
    case 3:
      return "Aprile";
    case 4:
      return "Maggio";
    case 5:
      return "Giugno";
    case 6:
      return "Luglio";
    case 7:
      return "Agosto";
    case 8:
      return "Settembre";
    case 9:
      return "Novembre";
    case 10:
      return "Settembre";
    case 11:
      return "Dicembre";
    default:
      "";
  }
};
