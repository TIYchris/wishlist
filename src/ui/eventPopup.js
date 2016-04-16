import React from 'react';

import store from 'store';

var img = require('assets/images/Wishlist.png');
    
require('assets/styles/editItemPopup.scss');

export default React.createClass({
    getInitialState: function() {
        return {};
    },
  // componentWillMount: function () {
  //   store.subscribe(function(){
  //     var currentStore = store.getState();
  //     this.setState({
  //       list: currentStore.selectedlist
  //     })
  //   }.bind(this));
  // },
  // onCancel: function(e) {
  //   e.preventDefault();
  //   this.setState({
  //       list: undefined
  //   })
  // },
  // onSubmit: function(e) {
  //   e.preventDefault();
  //   if (this.state.item.id) {
  //       // Save changes to an existing item.
  //   }
  //   else {
  //       // Add a new item.
  //   }
  // },
  // onChange: function(e) {
  //   e.preventDefault();

  //   var item = this.state.item;
  //   item.price = document.getElementById('price').value;
  //   this.setState({
  //       list: item
  //   });
  // },
 render: function () {
    return (
        <form className="popupEventContainer">
            <label className="inputEventLabel">Event Title</label>
            <input className="inputEventTitle" type="text"></input>
            <button className="eventCancel" onClick={this.onCancel}>CANCEL</button>
            <button className="eventSubmit" onClick={this.onSubmit}>SUBMIT</button>
        </form>
    )}
})