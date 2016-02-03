import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';


import App from './components/App';

//dom ready
$(document).ready(function () {
  window.React = React;

  var Back = React.createClass({
    render: function () {
      history.go(-2);
      return <div></div>
    }
  });

  render(
    (<Router>
      <Route path="/" component={App}>
      </Route>
    </Router>), document.getElementById('content')
  );
});


