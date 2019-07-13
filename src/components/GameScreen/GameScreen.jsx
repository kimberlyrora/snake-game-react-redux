import React, { Component } from 'react';
import Acorn from './Acorn'
import Board from './Board'
import Chipmunk from './Chipmunk'
import Header from './Header'


// import 'Header.css'
class GameScreen extends Component {
	render() {
		return (
			<div>
				<Header />
				<Board />
				<Acorn />
				<Chipmunk />
			</div >
		)
	}
}
export default GameScreen