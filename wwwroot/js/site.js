const uri = '/api/members';
let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addFirstName = document.getElementById('add-firstname');
    const addLastName = document.getElementById('add-lastname');
    const addAddress = document.getElementById('add-address');
    const addSsn = document.getElementById('add-ssn');
    const addBirthdate = document.getElementById('add-birthdate');

    const member = {
        
        firstName: addFirstName.value.trim(),
        lastName: addLastName.value.trim(),
        addressKey: addAddress.value.trim(),
        sSn: addSsn.value.trim(),
        birthDate: addBirthdate.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(member)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addFirstName.value = '';
            addLastName.value = '';
            addAddress.value = '';
            addSsn.value = '';
            addBirthdate.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-firstname').value = item.firstName;
    document.getElementById('edit-lastname').value = item.lastName;
    document.getElementById('edit-address').value = item.addressKey;
    document.getElementById('edit-ssn').value = item.sSn;
    document.getElementById('edit-birthdate').value = item.birthDate;
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    console.log(itemId);
    const item = {
        id: parseInt(itemId, 10),
        firstName: document.getElementById('edit-firstname').value.trim(),
        lastName: document.getElementById('edit-lastname').value.trim(),
        addressKey: parseInt(document.getElementById('edit-address').value.trim()),
        sSn: parseInt(document.getElementById('edit-ssn').value.trim()),
        birthDate: document.getElementById('edit-birthdate').value.trim(),
    };

    console.log(item);

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'member' : 'members';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';
    console.log(data);
    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode0 = document.createTextNode(item.id);
        td1.appendChild(textNode0)

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.firstName);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        let textNode1 = document.createTextNode(item.lastName);
        td3.appendChild(textNode1);

        let td4 = tr.insertCell(3);
        let textNode2 = document.createTextNode(item.birthDate);
        td4.appendChild(textNode2);

        let td5 = tr.insertCell(4);
        let textNode3 = document.createTextNode(item.addressKey);
        td5.appendChild(textNode3);

        let td6 = tr.insertCell(5);
        let textNode4 = document.createTextNode(item.sSn);
        td6.appendChild(textNode4);


        
        let td7 = tr.insertCell(6);
        td7.appendChild(editButton);

        let td8 = tr.insertCell(7);
        td8.appendChild(deleteButton);
    });

    todos = data;
}