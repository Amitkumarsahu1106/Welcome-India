import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import StateDetails from './pages/StateDetails';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/state/:id" component={StateDetails} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
