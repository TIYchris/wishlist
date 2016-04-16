import React from 'react';

import store from 'store';

require('assets/styles/list.scss');

export default React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        store.dispatch({
          type: 'ITEM_SELECTED',
          selectedItem: this.props.item
        });
    },
  render: function () {
    return (
        <div className="listing">
            <img className="listImg" src="" />
            <div>Item {this.props.item.id}</div>
            <div>{this.props.item.price}</div>
            <a href="#" onClick={this.handleClick}>See This Item</a>
        </div>
    )}
})