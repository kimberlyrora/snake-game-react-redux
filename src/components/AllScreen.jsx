import React, {Component} from 'react';
import './AllScreen.css'
import GameScreen from './GameScreen/GameScreen' 
import ScoreScreen from './ScoreScreen/ScoreScreen'
class AllScreen extends Component {
	render(){
		return (
			<>
			<GameScreen />
			<ScoreScreen />
			</>
		)
	}
}
export default AllScreen