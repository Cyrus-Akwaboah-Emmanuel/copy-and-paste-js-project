const copyBtn = document.querySelector("#copy-text");
const pasteBtn = document.querySelector("#paste-text");
const textArea = document.querySelector("#textarea");
const pastingArea = document.querySelector(".pasting-area");

copyBtn.addEventListener("click", async (e)=>{
    e.preventDefault();
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    await navigator.clipboard.writeText(textArea.value);
});

pasteBtn.addEventListener("click", async (e) =>{
    e.preventDefault();
    const read = await navigator.clipboard.readText();
    pastingArea.textContent = read;
})