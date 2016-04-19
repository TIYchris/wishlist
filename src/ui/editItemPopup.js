import React from 'react';
import store from 'store';
import { getItems } from 'api/data';

var img = require('assets/images/Wishlist.png');
	
require('assets/styles/editItemPopup.scss');

export default React.createClass({
    getInitialState: function() {
        return {};
    },

    componentWillMount: function () {
        var itemId = this.props.params.itemId;
        getItems(itemId);

        store.subscribe(this.storeUpdated);
    },

    storeUpdated: function(){
        var currentStore = store.getState();
        this.setState({
            item: currentStore.selectedItem
        })
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
        // Save changes to an existing item
        } else {
        // Add a new item
        }
    },

    onChange: function(e) {
        e.preventDefault();

        var item = this.state.item;
    
        item.title = document.getElementById('title').value;
        item.price = document.getElementById('price').value;
        item.description = document.getElementById('description').value;
        item.item_url = document.getElementById('item_url').value;
        item.image_url = document.getElementById('image_url').value;
        item.visible = document.getElementById('visible').value;
        
        this.setState({
            item: item
        });
    },
    
    render: function () {
        if (!this.state.item) {
            return null;
        }

    if (this.state.item) {
        // render the updated form.

    }

    return (
    	<form className="popupEditContainer">
            <div className="popupTitle">{this.state.item.id ? "Edit Item" : "Add Item"}</div>
            <label className="inputTitle">Title:</label>
            <input className="inputEditTitle" type="text" value={this.state.item.title} onChange={this.onChange}></input>
            <label className="inputPrice">Price:</label>
            <input className="inputEditPrice" id="price" type="text" value={this.state.item.price} onChange={this.onChange}></input>
            <label className="inputDescription">Description:</label>
            <input className="inputEditDescription" id="description" type="text" value={this.state.item.description} onChange={this.onChange}></input>
            <label className="inputUrl">URL:</label>
            <input className="inputEditUrl" type="text" value={this.state.item.item_url} onChange={this.onChange}></input>
            <label className="inputImage">Image:</label>
            <input className="inputEditImage" type="text" value={this.state.item.image_url} onChange={this.onChange}></input>
            <label className="inputVisible" value={this.state.item.visible} onChange={this.onChange}>Visible</label>
            <input className="inputCheckbox" type="checkbox"></input>
            <button className="inputCancel" onClick={this.onCancel}>CANCEL</button>
            <button className="inputSubmit" onClick={this.onSubmit}>SUBMIT</button>
    	</form>
    )}
})