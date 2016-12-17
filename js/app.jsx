import React from "react";
import Main from "./main.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";
import { App } from "neal-react";

class LandingPage extends React.Component {
  render() {
    return (
      <App
        googleAnalyticsKey="#########"
        segmentKey={null}
        stripeKey={null}
        history={ browserHistory }>
        { this.props.children }
      </App>
    );
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ LandingPage } history={ browserHistory }>
      <IndexRoute name="home" component={ Main }/>
      <Route path="*" component={ Main }/>
    </Route>
  </Router>
), document.getElementById("main"));
