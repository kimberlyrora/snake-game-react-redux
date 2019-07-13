import React, { Component } from 'react';
import Acorn from './Acorn'
import Board from './Board'
import Chipmunk from './Chipmunk'
import Header from './Header'


// import 'Header.css'
class GameScreen extends Component {
	render() {
		return (
			<>
				<Header />
				<Board>
					<Acorn />
					<Chipmunk />
				</Board>
			</>
		)
	}
}
export default GameScreen