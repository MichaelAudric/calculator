let curr = "0";

function updateOutput()
{

    const output = document.querySelector(".output");
    output.textContent = curr;

}

updateOutput();

const one = document.querySelector("#one");
one.addEventListener("click", ()=>{
    curr += "1";
});
one.addEventListener("click", ()=>{
    updateOutput();
});