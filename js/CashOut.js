

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

    // amount validation 
    if(isNaN(amount)){
        alert('Failed add money!');
        return ;
    }   


    if(PinNumber==='34'){
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


        // amount validation 
        if(amountInteger > previousAmountConvertInteger){
            alert('You don not have enough balance');
            return ;
        }



        // calculate  total amount 
        const totalAmount =   previousAmountConvertInteger - amountInteger ;
        console.log(totalAmount)


        // amount set 
        document.getElementById('previous-amount').innerText = totalAmount;

        
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-green-500', 'border-2', 'rounded-lg');
        div.innerHTML = `
            <h4 class='text-2xl font-bold'>Cash Out</h4>
            <p>${previousAmountConvertInteger} Withdraw. New balance: ${totalAmount}</p>
        `;
        
        // Append to the transaction history
        document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('wrong pin');
    }

})