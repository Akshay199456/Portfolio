import React from 'react';
import { Icon, Button } from 'semantic-ui-react'
import './style.css';


const HomeIntroduction = (props) =>{


	return(
			<div>
				{ props.buttonClicked === false ?
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
				 			<span onClick={props.showAbout}> About </span>
				 		</div>
				 	</div>

				 	:
				 	<div className='detailsContainer centerText'>
				 		<p>Hi!, my name is Akshay Mysore. </p>

				 		<p>
						I am a versatile full-stack software engineer with server and client side development
						skills. I’ve built multiple end to end platforms from scratch and have a comprehensive
						understanding of the hardware and circuitry required to build complex systems. My interest
						to have a comprehensive understanding of computers drove me to pursue a Computer Engineering degree
						providing me with the hardware knowledge as well as attend a software engineering immersive at General Assembly,
						San Francisco to develop a background in software. 
						</p>
						<div className='button'>
							<Button onClick={props.showAbout} color='black'> Back </Button>
						</div>
					</div>
				} 
			</div>
	);
}

export default HomeIntroduction;