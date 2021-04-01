import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import './index.css'
import me from './me.png'
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
	return(
		  <>
		  	<Navbar/>
		  	<div className="container my-5">
		  		<div className="row">
		  			<div className="col-lg-6 col-sm-12 col-m-6 mt-5 body">
		  				<h2>Hey,</h2>
		  				<h2>I'm <span className="text-info">Ansh Varshney</span></h2>
		  				<h2>A Web Developer</h2>
		  				<a href="https://upwork.com/Ansh Varshney" target="_blank"><input type="button" value="Upwork" className="mr-2 btn btn-info" /></a>
		  				<a href="https://fiverr.com/AnshDeveloper" target="_blank"><input type="button" value="Fiverr" className="btn btn-info" /></a>
		  			</div>
		  			<div className="col-lg-6 col-m-6 col-sm-12 img">
		  				<img src={me} alt="Pic" className="img-fluid"/>
		  			</div>
		  		</div>
		  	</div>
		  </>
		)
}
export default Home;
