
// for login button 

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();        /* valslla tropic  */
    // console.log(event)

    // get phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)

    // get pin number 
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    if(phoneNumber=='017' && pinNumber=='34'){
        console.log('successful login!!!!!!!!!!');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin')
    }
})