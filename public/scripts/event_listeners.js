const deleteButton = document.getElementById('deleteButton');

document.addEventListener('DOMContentLoaded', () => {
  const selectButtons = document.querySelectorAll('.select-btn');

  selectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const assetTag = button.dataset.asset;
      const assignedTo = button.dataset.assigned;
      const dateBought = button.dataset.dateBought;
      const dateDecommissioned = button.dataset.dateDecommissioned;
      const deviceType = button.dataset.deviceType;
      const operatingSystem = button.dataset.operatingSystem;

      document.getElementById('assetTag').value = assetTag;
      document.getElementById('assignedTo').value = assignedTo;
      document.getElementById('dateBought').value = dateBought;
      document.getElementById('dateDecommissioned').value = dateDecommissioned;
      document.getElementById('deviceType').value = deviceType;
      document.getElementById('operatingSystem').value = operatingSystem;
    });
  });
});

deleteButton.addEventListener('click', () => {
  const confirmation = confirm('Are you sure you want to delete this entry?');
  if (confirmation) {
    dataForm.action = '/delete';
    dataForm.submit();
  }
});