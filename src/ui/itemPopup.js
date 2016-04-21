import React from 'react';

import store from 'store';
	
require('assets/styles/itemPopup.scss');

export default React.createClass({
  getInitialState: function() {
        return {};
    },
  componentWillMount: function () {
    this.unsubscribe = store.subscribe(this.storeUpdated);
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

  storeUpdated: function(){
    var currentStore = store.getState();
      this.setState({
        item: currentStore.item
      });
  },

  onClose: function(e) {
    e.preventDefault();
    this.setState({
        item: undefined
    })
  },

 render: function () {
    if (!this.state.item) {
        return null;
    }
    return (
    	<form className="popupContainer">
            <div className="popupTitle">View Item</div>

            <label className="itemPopupTitle">Title:</label>
            <div className="itemTitle">{this.state.item.title}</div>

            <label className="itemPopupPrice">Price:</label>
            <div className="itemPrice">${this.state.item.price}</div>

            <label className="itemPopupUrl">Url:</label>
            <div className="itemUrl">{this.state.item.price}</div>

            <label className="itemPopupImage">Image:</label>
            <div className="itemImage">{this.state.item.price}</div>

            <button className="buttonClose" onClick={this.onClose}>CLOSE</button>
    	</form>
    )}
})