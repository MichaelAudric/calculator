let curr = "0";


function updateOutput()
{

    const output = document.querySelector(".output");
    output.textContent = curr;

}


function isNumber ( char )
{

    return /^\d$/.test(char);

}


// function getNextNum ( ind , first )
// {

//     let num = 0;



// }


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


// eq = document.querySelector ("#equals");

// eq.addEventListener ("click" , () => {

//     try{

//         let num1;
//         let operator;
//         let num2;



//     }

//     catch(e){

//         curr = "0";

//     }

// });


buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        updateOutput();

    });

});