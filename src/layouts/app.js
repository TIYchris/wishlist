import React from 'react';
import { Link } from 'react-router';

require('assets/styles/app.scss');


export default React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/">login</Link><br />
        <Link to="/events">events</Link><br />
        <Link to="/list">List</Link><br />
        <Link to="/userWishList">UserWishList</Link>
        {this.props.children}
      </div>
    )
  }
})