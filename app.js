function showContent(contentType) {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content
  
    var heading, content;
  
    switch (contentType) {
      case 'home':
        heading = 'Welcome to Elderly Care App';
        content = 'This app provides information, care tips, and medicine time alerts for elderly people.';
        break;
  
      case 'careTips':
        heading = 'Care Tips';
        content = '<ul><li>Stay hydrated by drinking enough water.</li><li>Eat a balanced diet rich in nutrients.</li><li>Engage in light exercises to stay active.</li></ul>';
        break;
  
      case 'medicineAlerts':
        heading = 'Medicine Time Alerts';
        content = 'Set specific times for taking your medicines and receive alerts.';
        break;
  
      default:
        heading = 'Welcome to Elderly Care App';
        content = 'This app provides information, care tips, and medicine time alerts for elderly people.';
        break;
    }
  
    var newHeading = document.createElement('h2');
    newHeading.textContent = heading;
  
    var newContent = document.createElement('p');
    newContent.innerHTML = content;
  
    contentDiv.appendChild(newHeading);
    contentDiv.appendChild(newContent);
  }
  