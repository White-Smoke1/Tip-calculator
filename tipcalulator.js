const billTotalInputDiv = document.getElementById("billTotalInput");
const tipInputDiv = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");


let numberOfPeople = Number (
    numberOfPeopleDiv.innerText)

    const calculateBill = () => {
        let bill = Number(billTotalInputDiv.value);
    
        let tip = Number(tipInputDiv.value) / 100;

        let tipAmount = bill * tip

        let totalAmount = bill + tipAmount;

        let perPersonTotal = totalAmount / numberOfPeople;

        perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

    };


    function increasePeople() {
    numberOfPeople += 1;

    numberOfPeopleDiv.innerText = numberOfPeople;
    }

function decreasePeople() {
    if (numberOfPeople <= 1) {
        return 
    }

    numberOfPeople -= 1;

    numberOfPeopleDiv.innerText = numberOfPeople;
}

    


