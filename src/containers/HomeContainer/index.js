import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react';
import './style.css';

class HomeContainer extends Component{
	constructor(){
		super();

	}

	render(){
		return(
			<div>
				<div className='home'>
					<div className='homeContact'>
						Contact Info
					</div>

					<div className='homeProjects'>
						Project
					</div>
				</div>
			</div>
		);
	}
}

export default HomeContainer;