

document.getElementById('cash-out-money-btn').addEventListener('click',function(event){
    // prevent page reload 
    event.preventDefault();
    console.log('yes this page is connected ')

    // take amount input 
    const amount = document.getElementById('input-amount-cash-out').value
    console.log(amount)
    // amount= ' ';

    const PinNumber = document.getElementById('pin-number-cash-out').value
    console.log(PinNumber)
    // PinNumber =' ';


    if(PinNumber=='34'){
        console.log('successful login!!!!!!!!!!');

        // get previous amount 
        const getPreviousAmount = document.getElementById('previous-amount').innerText
        console.log(getPreviousAmount);

        // check is Number or not
        console.log( typeof getPreviousAmount);
        console.log(typeof amount);


        // convert amount text to number 
        const amountInteger = parseFloat(amount)
        const previousAmountConvertInteger = parseFloat(getPreviousAmount)



        // calculate  total amount 
        const totalAmount =   previousAmountConvertInteger - amountInteger ;
        console.log(totalAmount)


        // amount set 
        document.getElementById('previous-amount').innerText = totalAmount;

        
    }
    else{
        alert('wrong pin');
    }

})