const btn = document.querySelector("#btn");
const wid = document.querySelector("#wid");
const hei = document.querySelector("#hei");
const fs = document.querySelector("#fs");
const box = document.querySelector("#box");
const fc = document.querySelector("#fc");
const bc = document.querySelector("#bc");
const str = document.querySelector("#str");



btn.addEventListener("click", () => {
    const weight = document.querySelector("[name='weight']:checked");
    const alignRow = document.querySelector("[name='align-row']:checked");
    const alignCol = document.querySelector("[name='align-col']:checked");


   box.style.width = wid.value + "px";
   box.style.height = hei.value + "px";
   box.style.fontSize = fs.value + "px";
   box.style.color = fc.value;
   box.style.backgroundColor = bc.value;
   box.innerText = str.value;
   box.style.fontWeight = weight.value;
   box.style.justifyContent = alignRow.value;
   box.style.alignItems = alignCol.value;
})