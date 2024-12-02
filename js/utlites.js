function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}



function showSectionById(id){

    // add hidden of all section 
    document.getElementById('add-money-div').classList.add('hidden');
    document.getElementById('cash-out-div').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden')

    // remove hidden by id 
    document.getElementById(id).classList.remove('hidden');
}