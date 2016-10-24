import React from 'react'
let socket = io('http://localhost:3000')

import Box from 'grommet/components/Box';
import NoiseChart from './Noise/Noise'
import TempChart from './Temp/Temp'

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			userCount: [],
			noise: 10 * Math.random(0,1)

		}

		socket.on('user connect', data => {
	      this.setState({ 
	      	users: data,
	      	noise: this.state.noise + 10 * Math.random(0,1), 
	      	})
	    })

	    socket.on('user disconnect', data => {
	    	console.log('disconnect')
	      // this.setState({ users: data, userCount: this.state.userCount.pop() })
	    })
		
	}

	render(){
		return(
			<Box direction="row">
				<NoiseChart data={this.state.noise} />
				<TempChart userCount={this.state.userCount} />
			</Box>
		)
	}
}