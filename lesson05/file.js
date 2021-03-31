// let userInput = prompt(`What would you like to do? \n 
//                         Enter "Q" to sign out \n
//                         Enter "W" to make a withdrawal \n
//                         Enter "D" to make a deposit \n
//                         Enter "B" to view your balance`);

// console.log(userInput);


let balance = 13420;
let newBalance;
let deposit;
let withdrawal;



function display(input) {
    //prompt user for input
    input = prompt(`What would you like to do? \n 
    Enter "Q" to sign out \n
    Enter "W" to make a withdrawal \n
    Enter "D" to make a deposit \n
    Enter "B" to view your balance`);
    //extra extra credit make sure all inputs are valid ie you can only enter numbers for the prompts for input equaling w and input equaling d
    //if user clicks cancel on prompt box the value returned is null
    if (input === null) {
        return
        //if input is not valid, exit program
    } else if (/[^qQbBdDwW]/.test(input)) {
        alert(`Please enter a valid input.`)
        display(input);
    }
    //if the user enters a q exit the function //base case
    else if (/[Qq]/gi.test(input)) {
        alert("You have been signed out.")
        return;
        //if the user enters d
    } else if (/[Dd]/gi.test(input)) {
        //prompt value equals deposit
        deposit = prompt("How much would you like to deposit")
            //if deposit converted to a number is more the 50000
        if (parseInt(deposit.replace(/,/g, '')) > 50000) {
            //alert user deposit limit
            alert(`Im sorry you can't deposit more than $50,000 at a time.`)
                //recursive call to display
                // display(input);
                //else if the input number is valid
        } else {
            //if input is a number do this if input is a string do this could enter is input valid regex here?
            //add input to global balance variable
            balance += parseInt(deposit.replace(/,/g, ''));
            //prompt here
            alert(`Your balance is now $${balance}`)
        }
        //recursive call to display
        display(input);
        //if input is a w
    } else if (/[Ww]/gi.test(input)) {
        //withdrawal = prompt value
        withdrawal = prompt(`How much would you like to withdrawl`);
        //if balance - prompt value is less than zero can't have negative balance;
        if (((balance - (parseInt(withdrawal.replace(/,/g, '')))) < 0)) {
            //alert you're broke bitch
            alert(`I'm sorry you do not have enough funds make this withdrawal`)
                //recursive call to display
            display(input);
            //if balance minus withdrawal is less than 300 but greater than 1;
        } else if (((balance - (parseInt(withdrawal.replace(/,/g, ''))) < 300)) && (((balance - (parseInt(withdrawal.replace(/,/g, '')))) > 0))) {
            //contiunewithdrawal equals prompt value
            let continueWithdrawal = prompt(`Your balance will be less than less than $300, are you sure you want to do this? \n Enter "Y" for yes and "N" for no.`);
            //if contiueWithdrawal is anything but y will re-prompt or hit cancel
            // (continueWithdrawal.toUpperCase() === "Y") ? alert(`Your balance is now $${balance = (balance - (parseInt(withdrawal.replace(/,/g, ''))))}`): display(input);
            if (continueWithdrawal.toUpperCase() === "Y") {
                alert(`Your balance is now $${balance = (balance - (parseInt(withdrawal.replace(/,/g, ''))))}`)
                display(input)
                    //else if input is anything but yes recursive call
            } else {
                display(input);
            }

            //else if withdrawal amount does not leave your balance at less than 300 or at less than zero subract from balance and recusive call
        } else {
            // balance = (balance - (parseInt(withdrawal.replace(/,/g, ''))))
            // alert(`Your balance is now $${balance}`)
            // prompt(`What would you like to do? \n 
            //     Enter "Q" to sign out \n
            //     Enter "W" to make a withdrawal \n
            //     Enter "D" to make a deposit \n
            //     Enter "B" to view your balance`);
            balance = (balance - (parseInt(withdrawal.replace(/,/g, ''))))
            alert(`Your balance is now $${balance}`)
            console.log(balance)
            display(input);
        }
    } else if (/[Bb]/gi.test(input)) {
        alert(`$${balance}`)
            // prompt(`What would you like to do? \n 
            //     Enter "Q" to sign out \n
            //     Enter "W" to make a withdrawal \n
            //     Enter "D" to make a deposit \n
            //     Enter "B" to view your balance`);
        display(input);
    }

}
display();