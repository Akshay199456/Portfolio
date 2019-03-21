import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react';
import './style.css';

import HomeIntroduction from '../../components/HomeIntroduction';
import HomeProject from '../../components/HomeProject';

class HomeContainer extends Component{
	constructor(){
		super();

	}

	githubLink = () =>{
		window.location.assign('https://github.com/Akshay199456');
	}

	linkedinLink = () =>{
		window.location.assign('https://www.linkedin.com/in/akshaymysore/');
	}

	mailLink = () =>{
		window.location.assign('mailto:akshay.kum94@gmail.com');
	}

	render(){
		return(
			<div>
				<div className='home'>
					<div className='homeContact col-sm-12 col-lg-6 px-0'>
						<HomeIntroduction 
							githubLink={this.githubLink} 
							linkedinLink={this.linkedinLink} 
							mailLink={this.mailLink}
						/>
					</div>

					<div className='homeProjects col-sm-12 col-lg-6 px-0'>
						<HomeProject/>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeContainer;