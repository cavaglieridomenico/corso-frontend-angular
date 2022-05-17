console.log(window.location);
console.log(window.navigator);
console.log(window.history);
console.log(window.crypto);
console.log(window.document);

/*DOM Elements*/
const containerProp = () => document.querySelector(".container-prop");

/*Inserting properties into DOM elements*/
containerProp().children[0].children[1].textContent = window.location.href;
containerProp().children[1].children[1].textContent = window.navigator.vendor;
containerProp().children[2].children[1].textContent = `Pages visited with this window: ${window.history.length}`;
containerProp().children[3].children[1].textContent = `Subtle: ${window.crypto.subtle}`;
containerProp().children[4].children[1].innerHTML = `${window.document} Number of Nodes: ${window.document.DOCUMENT_NODE}`;
