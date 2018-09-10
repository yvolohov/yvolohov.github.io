import React from 'react';
import ReactDOM from 'react-dom';
import pickBy from 'lodash.pickby';
import Page from './Page.js';
import data from './gaearon.json';
import grid from './grid.css';

const fields = [
  'name',
  'login',
  'company',
  'location',
  'public_repos',
  'following',
  'followers',
  'avatar_url'
];

const filteredData = pickBy(data, (value, key) => {
  return (fields.indexOf(key) > -1);
});

ReactDOM.render(<Page {...filteredData}/>, document.getElementById('root'));
