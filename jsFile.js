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

del = document.querySelector("#delete");
del.addEventListener ( "click" , () => {

    curr = curr.slice(0,curr.length-1);

    if (curr === "")
    {

        curr = "0";

    }

} );

buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        updateOutput();

    });

});