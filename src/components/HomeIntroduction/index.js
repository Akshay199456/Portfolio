import React from 'react';
import { Icon } from 'semantic-ui-react'
import './style.css';


const HomeIntroduction = (props) =>{


	return(
			<div className='detailsContainer'> 
				<div className='homeName'>
					AKSHAY MYSORE M.S.
				</div>
				<div className='homeLabels'>
					Full Stack Engineer | Team Builder | Positivity
				</div>
				<div className='homeLinks'>
					<Icon circular name='github' onClick={props.githubLink} className='links'/>
					<Icon circular name='linkedin' onClick={props.linkedinLink} className='links'/>
					<Icon circular name='mail' onClick={props.mailLink} className='links'/>
				</div>
				<div className='homeAbout'>
					About
				</div>
			</div> 
	);
}

export default HomeIntroduction;