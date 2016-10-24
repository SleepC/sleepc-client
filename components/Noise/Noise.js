import React from 'react'

import Box from 'grommet/components/Box'
import Value from 'grommet/components/Value'
import Meter from 'grommet/components/Meter'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'


export default class Noise extends React.Component {
	render(){
		return(
			<Box alignSelf="center" flex={true} pad="medium" align="center" justify="center">
			   <Header size="small" pad={{"horizontal": "small"}}>
			      <Heading tag="h4">
			        <strong>
			          Noise Levels
			        </strong>
			      </Heading>
			    </Header>
			  <Meter type="arc" threshold={90} value={this.props.data} label={false} size="small" />
			  <Value value={this.props.data} units='DCB' size="medium" />
			</Box>
		)
	}
}