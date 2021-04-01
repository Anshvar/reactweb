import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from './Navbar'
import fontawesome from '../node_modules/font-awesome/css/font-awesome.css'
import Input from './input';
import Con from './contact.png'

const Contact = () =>{
	return(
		  <>
		  	<Navbar/>
		  	<div className="container my-5">
		  		<div className="row">
		  			<h2 className="text-center">-----Contact-----</h2>
		  			<div className="col-lg-6 col-sm-4 col-m-6 ">
		  				<img src={Con} alt=".." className="img-fluid"/>
		  			</div>
		  			<div className="col-lg-6 col-sm-4 col-m-6 mt-5">
		  				<form action="" method="post">
			  				<Input icon="input-group-text mb-2 fa fa-user" type="text" place="Username" name="User"/>
			  				<Input icon="input-group-text mb-2 fa fa-at" type="email" place="Email Id" name="Email"/>
			  				<Input icon="input-group-text mb-2 fa fa-lock" type="password" place="Password" name="pass"/>
			  				<div class="input-group flex-nowrap">
	 					 		<span class="input-group-text fa fa-comments mb-2" id="addon-wrapping"></span>
			  					 <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3" required></textarea>
			  				</div>
			  				<button className="btn btn-dark" name="submit">Submit</button>
		  				</form>
		  			</div>
		  		</div>
		  	</div>
		  </>
		)
}
export default Contact;
