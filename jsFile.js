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


function getNextNum ( ind )
{

    let num = 0.0;
    let encountered_a_dot = false;
    let floating_point = 10;
    let check_empty = true;

    while ( ind < curr.length && ( isNumber(curr[ind]) || (curr[ind]==='.') ))
    {

        check_empty = false;
        if ( curr[ind] === '.' )
        {

            if ( encountered_a_dot )
            {

                throw("");

            }

            else
            {

                encountered_a_dot = true;

            }

        }

        else
        {

            if (encountered_a_dot)
            {

                num += parseInt(curr[ind]) / floating_point;

                floating_point *= 10;

            }

            else
            {

                num = num * 10 + parseInt(curr[ind]);

            }

        }

        ind++;

    }

    if(check_empty) throw "";

    return [num,ind];

}


updateOutput();


const buttons = document.querySelectorAll("button");


buttons.forEach( (button) => {

    if (button.textContent != "del" && button.textContent != "=" && button.textContent != "reset")
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


eq = document.querySelector ("#equals");

eq.addEventListener ("click" , () => {

    try{

        let num1;
        let operator;
        let num2;
        let ind = 0;

        [num1,ind] = getNextNum(ind);

        while (ind < curr.length)
        {

            operator = curr[ind++];

            [num2,ind] = getNextNum(ind);

            switch (operator)
            {

                case "+":
                    num1 += num2;
                    break;
                
                case "-":
                    num1 -= num2;
                    break;

                case "*":
                    num1 *= num2;
                    break;

                case "/":
                    num1 /= num2;
                    break;

            }

        }

        curr = num1;

    }

    catch(e){

        curr = "0";

    }

});


buttons.forEach((button)=>{

    button.addEventListener("click",()=>{

        updateOutput();

    });

});