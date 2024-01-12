// home.js
function showHomeContent() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    var heading = 'Welcome to Elderly Care App';
    var content = 'This app provides information, care tips, and medicine time alerts for elderly people.';
  
    var newHeading = document.createElement('h2');
    newHeading.textContent = heading;
  
    var newContent = document.createElement('p');
    newContent.innerHTML = content;
  
    contentDiv.appendChild(newHeading);
    contentDiv.appendChild(newContent);
  }
  