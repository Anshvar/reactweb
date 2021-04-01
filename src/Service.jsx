import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Card from './Card';
import Pic from './OIP.jpg'
import Pic1 from './front.jpg'
import Pic2 from './download.jpg'
import Pic3 from './Back.jpg'
import Pic4 from './app.jpg'
import Pic5 from './data.jpg'

const Service = () =>{
	return(
		  <>
		  	<Navbar/>
		  	<div className="container my-5">
				<div className="row">
					<h2 className="text-center">-----Services-----</h2>
					<div className="col-lg-4 col-sm-12 col-m-4 mt-5 ">
		  				<Card img={Pic} p="A Website From ReactJs"/>		  				
		  			</div>
		  			<div className="col-lg-4 col-sm-12 col-m-4 mt-5">
		  				<Card img={Pic1} p="A Front End Development "/>		  				
		  			</div>
		  			<div className="col-lg-4 col-sm-12 col-m-4 mt-5">
		  				<Card img={Pic2} p="A Web Development Service"/>		  				
		  			</div>
		  			<div className="col-lg-4 col-sm-12 col-m-4 mt-5">
		  				<Card img={Pic3} p="A BackEnd Development"/>		  				
		  			</div>
		  			<div className="col-lg-4 col-sm-12 col-m-4 mt-5">
		  				<Card img={Pic4} p="App Development Service"/>		  				
		  			</div>
		  			<div className="col-lg-4 col-sm-12 col-m-4 mt-5">
		  				<Card img={Pic5} p="Database Development "/>		  				
		  			</div>
				</div>
			</div>	
		  </>
		)
}
export default Service;
