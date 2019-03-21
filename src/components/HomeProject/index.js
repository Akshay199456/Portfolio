import React from 'react';
import { Divider } from 'semantic-ui-react';
import './style.css';

const HomeProject = (props) =>{
	return(
		<div className='projectContainer'>
			<div className="row no-gutters">


	          <div className="col-sm-12 col-md-12 col-lg-12 mx-0 thumbnail-wrapper">
	            <img className="img-fluid image" src="/projectCapstone.png" alt="Open Arms NYC - social service app"/>
	            <div className="title">
	              <div className="title-content">
	                <p>ONE STOP SEARCH</p>
	              </div>
	            </div>
	            <div className="link">
	              <div className="link-icon">
	                <a href="#" target="_blank"><i className="fa fa-link mx-2" aria-hidden="true"></i></a>
	                <a href="https://github.com/Akshay199456/capstone" target="_blank"><i className="fab fa-github-alt mx-2" aria-hidden="true"></i></a>
	              </div>
	            </div>
	          </div>

	          <div className='dividerLine'>
	          </div>



	          <div className="col-sm-12 col-md-12 col-lg-12 mx-0 thumbnail-wrapper">
	            <img className="img-fluid image" src="/project3.png" alt="The Weather App"/>
	            <div className="title">
	              <div className="title-content">
	                <p>FLUTTER</p>
	            </div>
	            </div>
	            <div className="link">
	              <div className="link-icon">
	                <a href="https://flutter-client.herokuapp.com/" target="_blank"><i className="fa fa-link mx-2" aria-hidden="true"></i></a>
	                <a href="https://github.com/Akshay199456/Project-3" target="_blank"><i className="fab fa-github-alt mx-2" aria-hidden="true"></i></a>
	              </div>
	            </div>
	          </div>

	          <div className='dividerLine'>
	          </div>


	          <div className="col-sm-12 col-md-12 col-lg-12 mx-0 thumbnail-wrapper">
	            <img className="img-fluid image" src="/project2.png" alt="Sliked - a micro blog app"/>
	            <div className="title">
	              <div className="title-content">
	                <p>SHOPAHOLIC</p>
	              </div>
	            </div>
	            <div className="link">
	              <div className="link-icon">
	                <a href="https://shopaholic-project.herokuapp.com/" target="_blank"><i className="fa fa-link mx-2" aria-hidden="true"></i></a>
	                <a href="https://github.com/Akshay199456/Project-2" target="_blank"><i className="fab fa-github-alt mx-2" aria-hidden="true"></i></a>
	              </div>
	            </div>
	          </div>

	          <div className='dividerLine'>
	          </div>


	          <div className="col-sm-12 col-md-12 col-lg-12 mx-0 thumbnail-wrapper">
	            <img className="img-fluid image" src="/project1.png" alt="Befound - A missing person app"/>
	            <div className="title">
	              <div className="title-content">
	                <p>POKEMON BATTLE</p>
	              </div>
	            </div>
	            <div className="link">
	              <div className="link-icon">
	                <a href="https://pages.git.generalassemb.ly/AkshayMysore/AkshayMysore.github.io-Project1/" target="_blank"><i className="fa fa-link mx-2" aria-hidden="true"></i></a>
	                <a href="https://github.com/Akshay199456/Project-1" target="_blank"><i className="fab fa-github-alt mx-2" aria-hidden="true"></i></a>
	              </div>
	            </div>
	          </div>
        	</div>
		</div>
	);
}

export default HomeProject;