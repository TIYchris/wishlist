import React from 'react';
import store from 'store';


require('assets/styles/userWishList.scss');



export default React.createClass({
  render: function () {
    return (
        <div className="userWishListContainer">
            <div className="wishContainer">
                <div className="listing">
                    <div className="wishImg"></div>
                    <div className="wishItem">Item 1</div>
                    <div className="wishPrice">$450</div>
                    <a className="seeItem" href="">See this item</a>
                    <button className="wishButton">Pledge</button>
                </div>
            </div>
        </div>
    )}
})