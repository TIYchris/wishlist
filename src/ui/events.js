import React from 'react';
import Pledge from 'ui/pledge';
import ItemPopup from 'ui/itemPopup';
import EventPopup from 'ui/eventPopup';
import store from "store";
import { getLists, getPledges } from "api/data";
import { Link } from 'react-router';

var img = require('assets/images/Wishlist.png');

require('assets/styles/eventPopup.scss');

export default React.createClass({
  getInitialState: function(){
    return {
      lists: [],
      pledges: []
    };
  },

  componentWillMount: function() {
    store.subscribe(this.storeUpdated);
    getLists();
    getPledges();
  },

  storeUpdated: function() {
      var currentStore = store.getState();
      this.setState({
        lists: currentStore.lists || [],
        pledges: currentStore.pledges || []
      });
  },

  onAddEvent: function(){
    store.dispatch({
      type: 'ADD_LIST',
      newList: {}
    });
  },

  getPledgeTotal: function() {
    var total = 0;

    for (var i = 0; i < this.state.pledges.length; ++i) {
      var pledge = this.state.pledges[i];
      total += pledge.pledge_value;
    }

    return total;
  },

  render: function () {
    return (
      <div>
      	<img className="title" src={img} />
      	<div className="eventsContainer">
      		<div>
	      		<div className="eventsTitle">My Events</div>

            {this.state.lists.map(function(list) {
                return (
                  <Link key={list.id} className="eventLink" to={"/list/" + list.id}>
                    <div className="event">{list.title}</div>
                  </Link>  
                )
            })}
	      		<button className="addEvent" onClick={this.onAddEvent}>
	      			<div className="circle"></div>
	      			<div className="plus">+</div>
	      		</button>
      		</div>
      		<div className="pledges">
      			<div className="pledgesTitle">My Pledges</div>
      			<div className="totalName">Total Pledged:</div>
      			<div className="totalDollar">${this.getPledgeTotal()}</div>
      			{this.state.pledges.map(function(pledge){
              return (<Pledge key={pledge.id} pledge={pledge} />)
            })}
      		</div>
      	</div>
        <EventPopup />
        <ItemPopup />
      </div>
    )
  }
})