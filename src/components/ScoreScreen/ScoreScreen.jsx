import React, {Component} from 'react';
import Header from './Header'
import TableScore from './TableScore'
import EachScore from './EachScore'

// import 'Header.css'
class ScoreScreen extends Component {
	render(){
		return (
			<>
			<Header />
			<TableScore />
			<EachScore />
			</>
		)
	}
}
export default ScoreScreen