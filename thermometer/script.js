const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = "white";


    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
        temp.style.color = "yellow";
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c9';
        temp.style.color = "yellow";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c8';
        temp.style.color = "yellow";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = '&#xf2c7';
        temp.style.color = "red";
    }, 4000);
}
tempload();

setInterval(tempload, 5000);