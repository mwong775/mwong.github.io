import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// get our fontawesome imports
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import EmailIcon from '@material-ui/icons/Email';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: ""};
		}
	
	callAPI() {
		fetch("http://localhost:9000/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
		this.callAPI();
	}
	
	render() {
		return(
			<div className="content-wrapper">
				<h2 className="gradient-font">Contact</h2>
				<p>Feel free to get in touch!</p>
				<IconButton href="mailto:mwong775@gmail.com"><EmailIcon/></IconButton>
				<IconButton onClick={()=> window.open("https://www.facebook.com/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faFacebook}/></IconButton>
				<IconButton onClick={()=> window.open("https://www.linkedin.com/in/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faLinkedin}/></IconButton>
				<IconButton onClick={()=> window.open("https://github.com/mwong775", "_blank")}><FontAwesomeIcon color='#199bfc' icon={faGithub}/></IconButton>
				<IconButton onClick={()=> window.open("https://www.goslugs.com/sports/track/2018-19/bios/wong_melanie_0nqe?view=bio", "_blank")}><DirectionsRunIcon style={{color: '#199bfc'}}/></IconButton>
				{/* <p className="App-intro">{this.state.apiResponse}</p> */}
			</div>
			);
	}
}

