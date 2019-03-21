import React from 'react';
import './style.css';

const HomeProject = (props) =>{
	return(
		<div className='projectContainer'>
			<img src='/projectCapstone.png' className='projects col-sm-12 col-md-6 col-lg-12 mx-0 thumbnail-wrapper'/>
			<img src='/project3.png' className='projects col-sm-12 col-md-6 col-lg-12 mx-0 thumbnail-wrapper'/>
			<img src='/project2.png' className='projects col-sm-12 col-md-6 col-lg-12 mx-0 thumbnail-wrapper'/>
			<img src='/project1.png' className='projects col-sm-12 col-md-6 col-lg-12 mx-0 thumbnail-wrapper'/>
		</div>
	);
}

export default HomeProject;