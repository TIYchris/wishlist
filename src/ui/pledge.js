import React from 'react';
import store from 'store';

require('assets/styles/events.scss');

export default React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        store.dispatch({
          type: 'VIEW_ITEM',
          item: this.props.pledge
        });
    },
  render: function () {
    return (
        <div className="pledgeCard">
          <img className="img" src={this.props.pledge.item.image} />
          <span className="name">{this.props.pledge.item.title}</span>
          <div><a className="pledgeDescription" href="#" onClick={this.handleClick}>See This Item</a></div>
          <span className="pledgeTitle">Amount Pledged:</span>
          <span className="pledgeDollar">${this.props.pledge.pledge_value}</span>
        </div>
    )}
})