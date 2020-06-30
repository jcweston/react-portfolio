import React, { Component } from 'react';
import Header from './Header'
import Subheader from './Subheader'
import Text from './Text'

class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let title=this.props.title
        let subheader=this.props.subheader
        let text=this.props.text
        return ( 
            <div>
                <Header name={title} />
                <Subheader subheader={subheader}/>
                <Text text={text}/>
            </div>
         );
    }
}
 
export default ContentBox;