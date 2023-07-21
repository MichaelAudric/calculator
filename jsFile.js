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




const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        updateOutput();
    });
});