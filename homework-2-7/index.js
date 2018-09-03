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
  var userLogo = document.getElementById('user-logo');
  userLogo.src = data.avatar_url;

  setValueToElement('user-name', data.name || '');
  setValueToElement('user-login', data.login);
  setValueToElement('user-company', data.company || '');
  setValueToElement('user-location', data.location || '');
  setValueToElement('user-repositories', data.public_repos);
  setValueToElement('user-following', data.following);
  setValueToElement('user-followers', data.followers);
  successContainer.style.display = 'block';
}

function showError(errorText) {
  var errorContainer = document.getElementById('error-container');
  setValueToElement('error-label', errorText);
  errorContainer.style.display = 'block';
}

function setValueToElement(id, value) {
  var element = document.getElementById(id);
  element.innerText = value;
}
