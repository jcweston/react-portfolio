import React, { Component } from 'react';
import ContentBox from './ContentBox'
import Header from './Header'
import Subheader from './Subheader'

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let state=this.props.state
        return ( 
            <div className="Column , ContentList">
              <div className={`ContentBox , ${state.home}`} id="Home">
              <h2 className="Header">Home</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.overview}`} id="Overview">
                <h2 className="Header">Overview</h2>
                <Subheader name="Trainee Web Developer" />
                <p> Career changer with a highly technical background in the chemical industry.</p>
                <p>Quick learner with a new passion for web development</p>
              </div>
              <div className={`ContentBox , ${state.projects}`}id="Projects">
              <h2 className="Header">Projects</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.studies}`} id="Studies">
              <h2 className="Header">Studies</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.pictures}`} id="Pictures">
              <h2 className="Header">Pictures</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.attributions}`} id="Attributions">
              <h2 className="Header">Attributions</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.contacts}`} id="Contacts">
              <h2 className="Header">Contacts</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
            </div>
         );
    }
}
 
export default ContentList;