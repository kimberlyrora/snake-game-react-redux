import React, {Component} from 'react';
import Header from './Header'
import TableScore from './TableScore'
import EachScore from './EachScore'

// import 'Header.css'
class ScoreScreen extends Component {
	render(){
		return (
			<div className="col-6">
			<Header />
			<TableScore />
			<EachScore />
			</div>
		)
	}
}
export default ScoreScreen