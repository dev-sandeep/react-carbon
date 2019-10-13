import React from 'react';
import './App.css';
import Header from './Pages/Header'
import Home from './Pages/Home'
import Food from './Pages/Categories/Food'
import Travel from './Pages/Categories/Travel'
import House from './Pages/Categories/House'
import Result from './Pages/Result'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { BaseContextProvider } from './ContextApi/BaseContext'

function App() {
  return (
    <div className="App">
      <BaseContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/food" component={Food} />
            <Route path="/travel" component={Travel} />
            <Route path="/house" component={House} />
            <Route path="/result" component={Result} />
          </Switch>
        </Router>
      </BaseContextProvider>
    </div>
  );
}

export default App;
