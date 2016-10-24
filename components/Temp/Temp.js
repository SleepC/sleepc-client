import React from 'react'

import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Meter from 'grommet/components/Meter'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'

import Chart from 'grommet/components/chart/Chart';


import MarkerLabel from 'grommet/components/chart/MarkerLabel'
import Base from 'grommet/components/chart/Base'
import Layers from 'grommet/components/chart/Layers'
import Grid from 'grommet/components/chart/Grid'
import Line from 'grommet/components/chart/Line'
import HotSpots from 'grommet/components/chart/HotSpots'
import Axis from 'grommet/components/chart/Axis'




class TempChart extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
		<Box alignSelf="center" flex={true} pad="medium" align="center" justify="center">
		 <Header size="small" pad={{"horizontal": "small"}}>
	      <Heading tag="h4">
	        <strong>
	          Temperature Levels
	        </strong>
	      </Heading>
	     </Header>

	     <Chart>
		  <Axis vertical={true} count={3} ticks={true} />
		  <Base />
		  <Layers>
		    <Line values={this.props.userCount} />
		  </Layers>
	     </Chart>
		</Box>
		)
	}
}

export default TempChart