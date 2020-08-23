import React, {Component} from 'react';
import NavBar from './NavBar'
import IncidentCardList from './IncidentCardList'
import NewIncident from './NewIncident';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <NewIncident addItem={this.addItem}/>
            <NavBar 
             page={this.props.page}
             navButtonHandler={this.props.navButtonHandler}
             typeSearch={this.props.typeSearch}/>
            <h4>Page {this.props.page}</h4>
            <IncidentCardList 
             isLoading = {this.props.isLoading}
             data = {this.props.data}
             temp = {this.state.temp}/>
            </>
         );
    }

    addItem = (item) => {
        item.title=item.name
        this.setState({
            temp:item
        })
    }
}
 
export default Table;