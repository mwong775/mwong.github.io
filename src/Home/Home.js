import * as React from "react";
import Particles from 'react-particles-js'; // LEGIT ONE
import './Home.css';
import {Nav} from "../Nav/Nav";
import DatatablePage from "./DataTable";

export class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<DatatablePage/>
				<Particles params={particleOpt} className="particles"/>
			</div>
			);
	}
}

const particleOpt = {
              "particles": {
                  "number": {
                  "value": 50
              },
              "size": {
                "value": 3
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
              }
          }
      }
}



