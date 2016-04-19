import React from 'react';
import store from 'store';
import {getItemDetails} from 'api/data';

require('assets/styles/list.scss');

export default React.createClass({
    getInitialState: function() {
        return {
            item: {}
        };
    },

    handleClick: function(e) {
        e.preventDefault();
        store.dispatch({
          type: 'ITEM_SELECTED',
          selectedItem: this.state.item
        });
    },

    componentWillMount: function() {
        getItemDetails(this.props.item)
            .then(this.updateState);
      },

    updateState: function(itemDetails) {
        this.setState({
            item: itemDetails
        });

    },

  render: function () {
    return (
        <div className="listing">
            <img className="listImg" src={this.state.item.image_url} />
            <div>{this.state.item.title}</div>
            <div>${this.state.item.price}</div>
            <a href="#" onClick={this.handleClick}>See This Item</a>
        </div>
    )}
})