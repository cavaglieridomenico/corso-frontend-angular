//DOM Elements
const getResult = () => document.querySelector("#result");

const pc = {};

pc.processor = prompt("Choose your processor");
pc.hhd = prompt("Choose your hard disk");
pc.video = prompt("Choose your video card");
pc.ram = prompt("Choose your RAM");

getResult().innerHTML = `
<h3>Your PC</h3>
<p><strong>Processor</strong>: ${pc.processor}</p>
<p><strong>Hard Disk</strong>: ${pc.hhd}</p>
<p><strong>Video Card</strong>: ${pc.video}</p>
<p><strong>RAM</strong>: ${pc.ram}</p>
`;
