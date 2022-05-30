const getSelectionSort = <T>(list: T[]):T[] => {
  for (let i = 0; i < list.length - 1; i++) {
    let minId = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minId]) {
        minId = j;
      }
    }
    let temp = list[minId];
    list[minId] = list[i];
    list[i] = temp;
  }
  return list;
};

/*DOM Elements*/
const getButton = (): HTMLButtonElement => document.querySelector("#button-date");
const getMessageNumbers = (): HTMLDivElement => document.querySelector(".message-to-user-transparent");
const getMessageStrings = (): HTMLDivElement => document.querySelector(".strings");


const numbers: number[] = [90, 77, 150, 34, 3, 80, 9];

const words: string[] = ["Hello", "World", "Dog", "Cat", "Pizza"];

getMessageNumbers().innerText = numbers.toString();
getMessageStrings().innerText = words.toString();

getButton().addEventListener("click", () => {
  getMessageNumbers().textContent = getSelectionSort<number>(numbers).toString();
  getMessageStrings().textContent = getSelectionSort<string>(words).toString();
});
