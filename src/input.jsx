import React from 'react';

const Input = (prop) =>{
	return(
			<>
				<div class="input-group flex-nowrap">
 					 <span class={prop.icon} id="addon-wrapping"></span>
  					<input type={prop.type} class="form-control mb-2" name={prop.name} placeholder={prop.place} aria-describedby="addon-wrapping" required/>
				</div>
			</>
		)
}
export default Input;