import React from 'react';

import store from 'store';

var img = require('assets/images/Wishlist.png');
	
require('assets/styles/editItemPopup.scss');

export default React.createClass({
    getInitialState: function() {
        return {};
    },
  componentWillMount: function () {
    store.subscribe(function(){
      var currentStore = store.getState();
      this.setState({
        item: currentStore.selectedItem
      })
    }.bind(this));
  },
  onCancel: function(e) {
    e.preventDefault();
    this.setState({
        item: undefined
    })
  },
  onSubmit: function(e) {
    e.preventDefault();
    if (this.state.item.id) {
        // Save changes to an existing item.
    }
    else {
        // Add a new item.
    }
  },
  onChange: function(e) {
    e.preventDefault();

    var item = this.state.item;
    item.price = document.getElementById('price').value;
    this.setState({
        item: item
    });
  },
 render: function () {
    if (!this.state.item) {
        return null;
    }

    if (this.state.readOnly) {
        // render the readonly form.
    }

    // Otherwise render the editable form.
    return (
    	<form className="popupEditContainer">
            <div className="popupTitle">{this.state.item.id ? "Edit Item" : "Add Item"}</div>
            <label className="inputTitle">Title</label>
            <input className="inputEditTitle" type="text"></input>
            <label className="inputPrice">Price</label>
            <input className="inputEditPrice" id="price" type="text" value={this.state.item.price} onChange={this.onChange}></input>
            <label className="inputUrl">Url</label>
            <input className="inputEditUrl" type="text"></input>
            <label className="inputImage">Image</label>
            <input className="inputEditImage" type="text"></input>
            <label className="inputVisible">Visible</label>
            <input className="inputCheckbox" type="checkbox"></input>
            <button className="inputCancel" onClick={this.onCancel}>CANCEL</button>
            <button className="inputSubmit" onClick={this.onSubmit}>SUBMIT</button>
    	</form>
    )}
})