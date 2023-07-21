let curr = "0";

function updateOutput()
{

    const output = document.querySelector(".output");
    output.textContent = curr;

}

updateOutput();

const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {

    if (button.textContent != "del" && button.textContent != "=")
    {

        button.addEventListener ( "click" , () => {

            curr += button.textContent;

        });

    }

} );

// del = document.querySelector("del");
// del.removeEventListener("click",);

buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        updateOutput();

    });

});