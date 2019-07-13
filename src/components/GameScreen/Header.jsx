import React, {Component} from 'react';
import './HeaderGame.css'

class Header extends Component {
	render(){
		return (
			<div className="row">
			<div className="col-4 logo"></div>
			<p className="col-4 titlegame">Ardilla</p>
			</div>
		)
	}
}
 export default Header
