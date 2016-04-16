import React from 'react';
import Pledge from 'ui/pledge';
import ItemPopup from 'ui/itemPopup';
import EventPopup from 'ui/eventPopup';

import store from "store";
import { getLists, getPledges } from "api/data";

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
    // getPledges();

    store.dispatch({
      type: "PLEDGES_UPDATED",
      pledges: []
    })
  },

  storeUpdated: function() {
      var currentStore = store.getState();
      debugger;
      this.setState({
        lists: currentStore.lists,
        pledges: currentStore.pledges
      });
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
                  <a key={list.id} className="eventLink" href="">
                    <div className="event">{list.title}</div>
                  </a>  
                )
            })}

	      		<button className="addEvent">
	      			<div className="circle"></div>
	      			<div className="plus">+</div>
	      		</button>
      		</div>
      		<div className="pledges">
      			<div className="pledgesTitle">My Pledges</div>
      			<div className="totalName">Total Pledged:</div>
      			<div className="totalDollar">$600</div>

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