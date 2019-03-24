import React, { Component } from 'react';
import Item from "./Item"
// import './Category.css';

/**
 * Recieves ONE category with items from MasterList
 * Renders a div with category title and list of items
 * If item add button is clicked, item id is sent up to MasterList (then to AddEditForm)
 */

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interested: true
        }
        this.toggleInterest = this.toggleInterest.bind(this);
    }

    sendAddItem(id){
        let item = this.props.items.filter(item => item.id === id)[0];
        this.props.notifyAdd(item);
    }

    toggleInterest() {
        let curr = this.state.interested;
        this.setState({
            interested: !curr
        })
    }

    render() {
        return (
            <div className="Category">
                <div>
                    <h1 className="Category-title">
                        { this.props.title }
                    </h1>
                    <button className="Category-toggle-btn" onClick={ this.toggleInterest }>
                        +
                    </button>
                </div>
                <ul className={ this.state.interested
                        ? "Category-items"
                        : "Category-items hidden"}>
                    { this.props.items.map( item => 
                        <Item 
                            key={ item.id }
                            text={ item.text }
                            notifyAdd={ () => this.sendAddItem(item.id) }
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default Category;
