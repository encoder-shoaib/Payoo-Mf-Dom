

document.getElementById('add-money-btn').addEventListener('click',function(event){
    // prevent page reload 
    event.preventDefault();
    console.log('yes this page is connected ')

    // take amount input 
    const amount = document.getElementById('input-amount').value
    console.log(amount)
    // amount= ' ';

    const PinNumber = document.getElementById('pin-number').value
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
        const amountConvertInteger = parseFloat(getPreviousAmount)



        // calculate  total amount 
        const totalAmount = amountInteger + amountConvertInteger ;
        console.log(totalAmount)


        // amount set 
        document.getElementById('previous-amount').innerText = totalAmount;

        
    }
    else{
        alert('wrong pin');
    }

})