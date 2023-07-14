const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = Number(counter.innerHTML);

        const incr = targetCount / 100;

        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10)
        } else {
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();

})

//to convert string into number :-

//1) Using the unary  + Operator :
//var n = +str;

//2) The Number constructor:
//var n = Number(str);

//3)The parseFloat function:
//var n =parseFloat(str);