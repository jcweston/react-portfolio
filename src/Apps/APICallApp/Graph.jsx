import React, { Component } from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts'

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {name: 1, value: 400, pv: 2400},
                {name: 2, value: 300, pv:1000}
            ]
         }
    }
    render() { 
        let data=this.state.data
        return ( 
          <>  
            <h3>Graph</h3>
            <LineChart width={400} height={400} data={data}>
                <Line type='monotone' dataKey='value' stroke='#888888' />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey='name' />
                <YAxis />
            </LineChart>
          </>
         );
    }
}
 
export default Graph;