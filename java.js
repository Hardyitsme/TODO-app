function addItem(){
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value.trim()

    if(inputField !== ''){
        const displayArea = document.getElementById("displayArea");
        const newArea = document.createElement('div')
        newArea.className = 'item';
        newArea.textContent = inputValue;

        displayArea.appendChild(newArea);

        inputField.value = '';

    }
}