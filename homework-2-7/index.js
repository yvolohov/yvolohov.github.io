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

    /* reading body from stream and decoding to json */
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status + ': ' + response.statusText;
      }
      return response.json();
    })

    /* loading avatar (logo) to img element */
    .then(function (response) {
      return new Promise(function (resolve) {
        var userLogo = document.getElementById('user-logo');
        userLogo.src = response.avatar_url;
        userLogo.addEventListener('load', function (event) {
          resolve(response);
        });
      });
    })

    /* loading anoter fields */
    .then(function (response) {
      showUserData(response);
    })

    .catch(function (error) {
      showError(error);
    });
}

function showUserData(data) {
  var successContainer = document.getElementById('success-container');
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
