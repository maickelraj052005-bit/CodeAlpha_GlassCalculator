const display =
document.getElementById("display");

const buttons =
document.querySelectorAll("button");

let expression = "";

/* Button Click */

buttons.forEach((button)=>{

    button.addEventListener("click", ()=>{

        let value =
        button.innerText;

        /* AC */

        if(value === "AC"){

            expression = "";

            display.value = "";
        }

        /* DEL */

        else if(value === "DEL"){

            expression =
            expression.slice(0,-1);

            display.value = expression;
        }

        /* Equal */

        else if(value === "="){

            try{

                expression =
                eval(expression).toString();

                display.value =
                expression;
            }

            catch{

                display.value =
                "Error";

                expression = "";
            }
        }

        /* Normal Input */

        else{

            expression += value;

            display.value =
            expression;
        }
    });
});

/* Keyboard Support */

document.addEventListener("keydown",(e)=>{

    const allowedKeys =
    "0123456789+-*/.%";

    if(allowedKeys.includes(e.key)){

        expression += e.key;

        display.value = expression;
    }

    else if(e.key === "Enter"){

        try{

            expression =
            eval(expression).toString();

            display.value =
            expression;
        }

        catch{

            display.value =
            "Error";

            expression = "";
        }
    }

    else if(e.key === "Backspace"){

        expression =
        expression.slice(0,-1);

        display.value =
        expression;
    }

    else if(e.key === "Escape"){

        expression = "";

        display.value = "";
    }
});