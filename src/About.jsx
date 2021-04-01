import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from './Navbar'
import Pic from './undraw_Building_re_xfcm.png'
import fontawesome from '../node_modules/font-awesome/css/font-awesome.min.css'
const About = () =>{
	return(
		  <>
		  	<Navbar/>
		  	<div className="container my-5">
		  		<div className="row">
		  		<h2 className="text-center">-----About-----</h2>
		  			<div className="col-lg-6 col-sm-12 col-m-6 mt-5 body">
		  				<p>Hi there , <br/>My Name is Ansh Varshney . I am a good Web Developer . I am a very curious , kind and a knowledgable person . I doing every thing new in my daily life . I have many skills such as HTML 5 , CSS 3 , JavaScript and PHP , Python . I am now learning React JS for making a web application . I have done some amazing projects in all of these languages . I am a both Developer and Programmer and also a Front End Developer. Availablity :- Facebook Fiverr Upwork Github Freelancer & More</p>	
		  				<a className="btn btn-dark mr-1" target="_blank" href="https://github.com/AnshVar"><i class="fa fa-github"></i></a>
		  				<a className="btn btn-dark mr-1" target="_blank" href="https://www.facebook.com/auk.gaming.507"><i class="fa fa-facebook"></i></a>
		  				<a href="https://upwork.com/Ansh Varshney" target="_blank"><input type="button" value="Upwork" className="mr-1 btn btn-dark" /></a>
		  				<a href="https://fiverr.com/AnshDev58" target="_blank"><input type="button" value="Fiverr" className="btn btn-dark" /></a>
		  			</div>
		  			<div className="col-lg-6 col-m-6 col-sm-12 img">
		  				<img src={Pic} alt="Pic" className="img-fluid"/>
		  			</div>
		  		</div>
		  	</div>
		  </>
		)
}
export default About;
