//calling elements from index.html
const allItems = [];
const input = document.getElementById('input');
const button = document.getElementById('button');
const tbody = document.getElementById('tbody');
button.style.cursor = 'pointer';
const reset = document.getElementById('reset');

//function to add items to the list container
function addItems() {
//create the table row
    const tr = document.createElement('tr');
//create the table data
    const td1 = document.createElement('td');
    //load td1 with the input value
    const text = input.value;
//function to tell user to add a list item
if (text === '') {
    return alert('Enter a valid item')
}else{
    td1.textContent = text;
    tbody.appendChild(tr);
    tr.appendChild(td1);    
    input.value = '';
}
//iterator method to add list items in the array
    allItems.push(text);
    console.log(allItems);

//function to backspace an item already in the list
    const backspace = function () {
        td1.contentEditable = true;
        td1.style.cursor = 'pointer';
        
    }
    td1.addEventListener('click', backspace);

//function to add button to mark item as purchased
const purchased = function () {
//create button to mark item as bought
    const mark = document.createElement('button');
    mark.textContent = 'Mark Purchased';
    mark.id = 'mark';
    mark.style.cursor = 'pointer';
//create the second table data to hold the add button
    const td2 = document.createElement('td');
    tbody.appendChild(tr);
    tr.appendChild(td2);
    td2.appendChild(mark);

//if statement to change background color of marked items as bought
const bought = function () {
    if(mark) {
        td1.style.background = 'aqua';
        td1.style.textDecoration = 'line-through';
        
    }
}
mark.addEventListener('click', bought);
}
purchased();
//function to clear a particular items
const clear = function () {
//create button for clearing an item
    const clear1 = document.createElement('button');
    clear1.textContent = 'clear-item';
    clear1.id = 'clear-item';
    clear1.style.cursor = 'pointer';
//create the third table data to hold the clear button
    const td3 = document.createElement('td');
    tbody.appendChild(tr);
    tr.appendChild(td3);
    td3.appendChild(clear1);
//if statement to clear Item if clear is clicked
    const clearItem = function () {
        if (clear1) {
            tr.remove();
        }
    }
clear1.addEventListener('click', clearItem);
}
clear();
}
button.addEventListener('click', addItems);


//function to clear all items on the shopping list document
function clearAll () {
    location.reload();
}
reset.addEventListener('click', clearAll);