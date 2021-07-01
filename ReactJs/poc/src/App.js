import React from 'react';
import Navbar1 from './Components/pages/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/apiCalls/search'
import Upcoming from "./Components/apiCalls/upcoming"
import Genre from "./Components/apiCalls/filter"
function App() {
   return (      // give suitable name, folder, 
     <div className="App">
       <Router>
       <Navbar1 />
       <Switch>
            <Route exact path="/"><Upcoming /></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/filter"><Genre /></Route>
        </Switch>
       </Router>    
     </div>
   );
 }

export default App;

// Api key=  65289a5383msh09c3a32c5675e9bp1ee52ajsncbfcddc27a7f