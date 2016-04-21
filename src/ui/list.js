import React from 'react';
import store from 'store';
import WishlistItem from 'ui/wishlistItem';
import EditItemPopup from 'ui/editItemPopup';
import {getListDetails} from 'api/data';

require('assets/styles/list.scss');

export default React.createClass({
	getInitialState: function() {
		return {
			items: []
		};
	},

	componentWillMount: function() {
		var id = this.props.params.id;
	    getListDetails(id)
	    	.then(this.updateState);
	  },

	updateState: function(listDetails) {
		this.setState({
			title: listDetails.title,
			items: listDetails.items
		});
	},

	addItem: function(e) {
		e.preventDefault();
		store.dispatch({
          type: 'ITEM_SELECTED',
          selectedList: this.props.params.id,
          selectedItem: {
	        title: "",
	        price: "",
	        description: "",
	        item_url: "",
	        image_url: "",
	        visible: false
          }
        });
	},

  render: function () {
    return (
    	<div>
    		<div className="listContainer">
    			<div className="birthdayList">{this.state.title}</div>
    			<div className="list">
    				{this.state.items.map(function(item) {
    					return (<WishlistItem key={item} item={item} />)
    				})}

		      		<button onClick={this.addItem} className="addListing">
		      			<div className="circleListing"></div>
		      			<div className="plusListing">+</div>
		      		</button>
    			</div>
    		</div>
    		<EditItemPopup />
    	</div>
    )}
})