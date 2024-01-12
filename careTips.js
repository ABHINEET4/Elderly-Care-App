 // careTips.js
function showCareTipsContent() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    var heading = 'Care Tips';
    var content = '<ul><li>Stay hydrated by drinking enough water.</li><li>Eat a balanced diet rich in nutrients.</li><li>Engage in light exercises to stay active.</li></ul>';
  
    var newHeading = document.createElement('h2');
    newHeading.textContent = heading;
  
    var newContent = document.createElement('p');
    newContent.innerHTML = content;
  
    contentDiv.appendChild(newHeading);
    contentDiv.appendChild(newContent);
  }
  