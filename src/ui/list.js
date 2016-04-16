import React from 'react';
import store from 'store';
import WishlistItem from 'ui/wishlistItem';
import EditItemPopup from 'ui/editItemPopup';

var img = require('assets/images/Wishlist.png');
	
require('assets/styles/list.scss');

export default React.createClass({
	getInitialState: function() {
		return {
			items: [
				{ id: 1, price: "$150" },
				{ id: 2, price: "$250" },
				{ id: 3, price: "$350" },
				{ id: 4, price: "$450" },
				{ id: 5, price: "$550" },
				{ id: 6, price: "$650" },
			]
		};
	},
	addItem: function(e) {
		e.preventDefault();
		store.dispatch({
          type: 'ITEM_SELECTED',
          selectedItem: {}
        });
	},
  render: function () {
    return (
    	<div>
    		<img className="title" src={img} />
    		<div className="listContainer">
    			<div className="birthdayList">Birthday List</div>
    			<div className="list">
    				{this.state.items.map(function(item) {
    					return (<WishlistItem key={item.id} item={item} />)
    				})}

		      		<button onClick={this.addItem} className="addListing">
		      			<div className="circleListing"></div>
		      			<div className="plusListing">+</div>
		      		</button>
    			</div>
    		</div>
    		<EditItemPopup item={this.state.selectedItem} />
    	</div>

    )}
})