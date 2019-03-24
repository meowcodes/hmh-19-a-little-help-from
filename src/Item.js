import React, { Component } from 'react';
import './Item.css';

/**
 * Recieves ONE Item with items from Category
 * Renders a list item with item text
 * If item add button is clicked, item id is sent up to MasterList
 */

class Item extends Component {

    render() {
        return (
            <li className="Item">
                <p>{ this.props.text }</p>
                <button onClick={ this.props.notifyAdd }>+</button>
            </li>
        );
    }
}

export default Item;
