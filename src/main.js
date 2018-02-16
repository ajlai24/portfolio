import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from 'containers/App/App';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((<App />), document.getElementById('mount'));
});
