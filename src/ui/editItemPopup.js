import React from 'react';
import store from 'store';
import { addItem, updateItem } from 'api/data';


var img = require('assets/images/Wishlist.png');
	
require('assets/styles/editItemPopup.scss');

export default React.createClass({
    getInitialState: function() {
        return {};
    },

    componentWillMount: function () {
        store.subscribe(this.storeUpdated);
    },

    storeUpdated: function(){
        var currentStore = store.getState();
        this.setState({
            list_id: currentStore.selectedList,
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
            updateItem(this.state.list_id, this.state.item)
        } else {
            addItem(this.state.list_id, this.state.item)
        }
    },

    onChange: function(e) {
        e.preventDefault();

        if (!this.state.item) {
            return;
        }

        var item = this.state.item;
    
        item.title = document.getElementById('title').value;
        item.price = document.getElementById('price').value;
        item.description = document.getElementById('description').value;
        item.item_url = document.getElementById('item_url').value;
        item.image_url = document.getElementById('image_url').value;
        item.visible = document.getElementById('visible').value === "on";
        
        this.setState({
            item: item
        });
    },
    
    render: function () {
        if (!this.state.item) {
            return null;
        }

        return (
        	<form className="popupEditContainer">
                <div className="popupTitle">{this.state.item.id ? "Edit Item" : "Add Item"}</div>
                <label className="inputTitle">Title:</label>
                <input className="inputEditTitle" id='title' type="text" value={this.state.item.title} onChange={this.onChange}></input>
                <label className="inputPrice">Price:</label>
                <input className="inputEditPrice" id="price" type="text" value={this.state.item.price} onChange={this.onChange}></input>
                <label className="inputDescription">Description:</label>
                <input className="inputEditDescription" id="description" type="text" value={this.state.item.description} onChange={this.onChange}></input>
                <label className="inputUrl">URL:</label>
                <input className="inputEditUrl" id='item_url' type="text" value={this.state.item.item_url} onChange={this.onChange}></input>
                <label className="inputImage">Image:</label>
                <input className="inputEditImage" id='image_url' type="text" value={this.state.item.image_url} onChange={this.onChange}></input>
                <label className="inputVisible" >Visible</label>
                <input className="inputCheckbox" id='visible' checked={this.state.item.visible} onChange={this.onChange} type="checkbox"></input>
                <button className="inputCancel" onClick={this.onCancel}>CANCEL</button>
                <button className="inputSubmit" onClick={this.onSubmit}>SUBMIT</button>
        	</form>
        )
    }
})