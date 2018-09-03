function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

function fetchGithubUser(user) {
  fetch('https://api.github.com/users/' + user)

    .then(function (response) {
      if (response.status !== 200) {
        throw response.status + ': ' + response.statusText;
      }
      return response.json();
    })

    .then(function (response) {
      showUserData(response);
    })

    .catch(function (error) {
      showError(error);
    });
}

function showUserData(data) {
  var successContainer = document.getElementById('success-container');
  var userName = document.getElementById('user-name');
  var userLogin = document.getElementById('user-login');
  var userCompany = document.getElementById('user-company');
  var userLocation = document.getElementById('user-location');

  userName.innerText = data.name || '';
  userLogin.innerText = data.login;
  userCompany.innerText = data.company || '';
  userLocation.innerText = data.location || '';
  successContainer.style.display = 'block';
}

function showError(errorText) {
  var errorContainer = document.getElementById('error-container');
  var errorLabel = document.getElementById('error-label');

  errorLabel.innerText = errorText;
  errorContainer.style.display = 'block';
}
