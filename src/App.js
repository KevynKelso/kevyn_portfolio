import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ProjectsPage from './content/ProjectsPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={ProjectsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
