document.getElementById('add-detail-btn').addEventListener('click', function() {
    const labelInput = document.getElementById('label-input');
    const valueInput = document.getElementById('value-input');
    const detailsList = document.getElementById('details-list');

    if (labelInput.value.trim() === '' || valueInput.value.trim() === '') {
        alert('Please fill in both label and value fields.');
        return;
    }

    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        detailsList.removeChild(detailItem);
    });

    const labelSpan = document.createElement('span');
    labelSpan.textContent = labelInput.value;

    const valueSpan = document.createElement('span');
    valueSpan.textContent = valueInput.value;

    detailItem.appendChild(deleteButton);
    detailItem.appendChild(labelSpan);
    detailItem.appendChild(valueSpan);
    detailsList.appendChild(detailItem);

    labelInput.value = '';
    valueInput.value = '';
});