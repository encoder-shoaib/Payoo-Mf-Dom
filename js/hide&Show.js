document.getElementById('cash-out').addEventListener('click',function(){
    // console.log('hello')

    const showCashOut = document.getElementById('cash-out-div')
    showCashOut.classList.remove('hidden')

    const addHiddenInAddMoney = document.getElementById('add-money-div')
    addHiddenInAddMoney.classList.add('hidden');
})

document.getElementById('add-money').addEventListener('click',function(){
    // console.log('hello')



    const addHiddenInAddMoney = document.getElementById('add-money-div')
    addHiddenInAddMoney.classList.remove('hidden');

    const showCashOut = document.getElementById('cash-out-div')
    showCashOut.classList.add('hidden')
})