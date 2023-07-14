const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTofah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }
    const fahTocel = (fehr) => {
        let Celcius = Math.round((fehr - 32) * 5 / 9);
        return Celcius;
    }
    let result;
    if (valueTemp == 'cel') {
        result = celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;
    }

}