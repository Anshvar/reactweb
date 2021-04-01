import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pic from './OIP.jpg'


const Card = (prop) =>{
	return(
		<>
			<div class="card">
  				<img src={prop.img} class="card-img-top" alt="..." />
  				<div class="card-body">
    				<p class="card-text">{prop.p}</p>
  		    	</div>
			</div>
		
		</>
	)
}
export default Card;