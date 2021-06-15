import React from 'react';
import Heading from './Heading';
import WrappedCommentscount from './Commentscount';
import EnhancedLikescount from './Likescount';
import Notfound from './Notfound';
import ErrorBoundries from './ErrorBoundries';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
function App() {
    return (
        <Router>
        <div>
        <ul>
            <li>
                <NavLink to="/" exact activeStyle={{color:"red"}}>Heading</NavLink>
            </li>
            <li>
                <NavLink to="/likes" exact activeStyle={{color:"red"}}>EnhancedLikescount</NavLink>
            </li>
            <li>
                <NavLink to="/comments" exact activeStyle={{color:"red"}}>WrappedCommentscount</NavLink>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={Heading} />
            <ErrorBoundries>
            <Route path="/likes" component={EnhancedLikescount} />
            </ErrorBoundries>
            <Route path="/comments" component={WrappedCommentscount} />
            <Route component={Notfound} />
        </Switch>
        </div>
        </Router>
    );
}

export default App;