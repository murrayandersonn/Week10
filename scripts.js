let button = document.getElementById('button');

button.addEventListener('click', function(e) {
    e.preventDefault();
    
    // NOTE: These are grabbing my object values from the form.
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let hobby = document.getElementById('hobby').value;

    // NOTE: Grabbing table items and creating fields to put the values in.
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let deleteButton = document.createElement('button');

    //NOTE: Style delete button
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.margin = '5px';
    deleteButton.id = 'delete';

    // NOTE: event listner for the delete button
    deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        tbody.removeChild(tr);
    });

    // NOTE: Setting the values to the table items.
    td1.textContent = fname;
    td2.textContent = lname;
    td3.textContent = hobby;

    // NOTE: Appending the table items to the table row and the row to the table body.
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(deleteButton);
    tbody.appendChild(tr);

    // NOTE: Resetting the form values.
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('hobby').value = '';
    });