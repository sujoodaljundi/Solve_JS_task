const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

function addItem(event) {
    event.preventDefault();
    const newItem = itemInput.value.trim();
    if (newItem === '') return;

    const li = document.createElement('li');
    li.textContent = newItem;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        itemList.removeChild(li);
    };

    li.appendChild(deleteButton);
    itemList.appendChild(li);

    itemInput.value = '';
    itemInput.focus();
}

itemForm.addEventListener('submit', addItem);
