import React from 'react';

import store from 'store';
import {addList} from "api/data";

var img = require('assets/images/Wishlist.png');
    
require('assets/styles/editItemPopup.scss');

export default React.createClass({
    getInitialState: function() {
        return {};
    },

    componentWillMount: function () {
      store.subscribe(this.storeUpdated);
    },

    storeUpdated: function() {
        var currentStore = store.getState();
        this.setState({
          newList: currentStore.newList
        });
    },

    onCancel: function(e){
      e.preventDefault();
      this.closePopup();
    },

    closePopup: function() {
      store.dispatch({
        type: "ADD_LIST",
        newList: undefined
      });
    },

    onSubmit: function(e){
      e.preventDefault();
      var eventTitle = document.getElementById("eventTitle");
      var deadLine = document.getElementById("deadLine");

      addList(eventTitle.value, deadLine.value)
        .then(this.closePopup)
        .catch(function(err) {
          console.log(err);
        });
    },

  render: function () {
    if (!this.state.newList) {
      return null;
    }

    return (
        <form className="popupEventContainer">
            <label className="inputEventLabel">Event Title</label>
            <input id="eventTitle" className="inputEventTitle" type="text"></input>
            <input id="deadLine" className="inputEventDate" name="deadLine" type="date"></input>
            <button className="eventCancel" onClick={this.onCancel}>CANCEL</button>
            <button className="eventSubmit" onClick={this.onSubmit}>SUBMIT</button>
        </form>
    )}
})