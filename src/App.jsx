import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import { Switch , Route } from 'react-router-dom';

const App = () =>{
	return(
		  <>
		  	<Switch>
		  		<Route exact path="/" component={Home}/>
		  		<Route exact path="/About" component={About}/>
		  		<Route exact path="/Service" component={Service}/>
		  		<Route exact path="/Contact" component={Contact}/>
		  	</Switch>
		  </>
		)
}
export default App;