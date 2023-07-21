let curr = "0";

function updateOutput()
{

    const output = document.querySelector(".output");
    output.textContent = curr;

}

updateOutput();

const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {

    button.addEventListener ( "click" , () => {

        curr += button.textContent;

    });

} );

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        updateOutput();
    });
});