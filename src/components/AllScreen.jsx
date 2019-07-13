import React, { Component } from 'react';
import './AllScreen.css'
import GameScreen from './GameScreen/GameScreen'
import ScoreScreen from './ScoreScreen/ScoreScreen'
class AllScreen extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-6">
					<GameScreen />
				</div>
				<div className="col-6">
					<ScoreScreen />
				</div>
			</div>
		)
	}
}
export default AllScreen