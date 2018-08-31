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
  var p1 = fetch('https://api.github.com/users/' + user);

  var p2 = p1.then(function (response) {
    return response.json();
  });

  p2.then(function (response) {
    console.log(response);
  });
}
