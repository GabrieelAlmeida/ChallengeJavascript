
const minutes = document.querySelector('#timerMinutes');
const seconds = document.querySelector('#timerSeconds');
let counterSeconds = 59;
let counterMinutes = prompt('Inform the minutes:') - 1;


    minutes.innerHTML =  counterMinutes;
    seconds.innerHTML = 59;

    const timerSeconds = setInterval(() => {

        counterSeconds--;

        if(counterSeconds === 0 && counterMinutes != 0){
            counterSeconds = 60;

            counterMinutes--;
            minutes.innerHTML = counterMinutes;

        }else if(counterSeconds === 0 && counterMinutes == 0){
            clearInterval(timerSeconds);
        }

        seconds.innerHTML = counterSeconds;

    
    },1000);












