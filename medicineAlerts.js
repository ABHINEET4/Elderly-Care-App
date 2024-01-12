// medicineAlerts.js
function showMedicineAlertsContent() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    var heading = 'Medicine Time Alerts';
    var content = 'Set specific times for taking your medicines and receive alerts.';
  
    var newHeading = document.createElement('h2');
    newHeading.textContent = heading;
  
    var newContent = document.createElement('p');
    newContent.innerHTML = content;
  
    contentDiv.appendChild(newHeading);
    contentDiv.appendChild(newContent);
  
    // Display toast notifications
    showToasts();
  }
  
  function showToasts() {
    // Simulating different types of patients with different medicine schedules
    setTimeout(() => {
      toastr.success('Take medicine A - Morning', 'Patient Type 1');
    }, 4000);
  
    setTimeout(() => {
      toastr.warning('Take medicine B - Afternoon', 'Patient Type 2');
    }, 8000);
  
    setTimeout(() => {
      toastr.error('Take medicine C - Evening', 'Patient Type 3');
    }, 10000);
  }
  