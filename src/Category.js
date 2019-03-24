import React, { Component } from 'react';
import Item from "./Item"
import './Category.css';

/**
 * Recieves ONE category with items from MasterList
 * Renders a div with category title and list of items
 * If item add button is clicked, item id is sent up to MasterList (then to AddEditForm)
 */

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interested: true,
            expanded: false
        }
        this.toggleInterest = this.toggleInterest.bind(this);
        this.expandCategory = this.expandCategory.bind(this);
    }

    sendAddItem(id){
        let item = this.props.items.filter(item => item.id === id)[0];
        this.props.notifyAdd(item);
    }

    toggleInterest() {
        let curr = this.state.interested;
        this.setState({
            interested: !curr
        });
    }
    
    expandCategory() {
        let curr = this.state.expanded;
        this.setState({
            expanded: !curr
        })
    }

    render() {
        return (
            <div className="Category">
                <div className="Category-title-box">
                    <h1 className="Category-title">
                        { this.props.title }
                    </h1>
                    <button className="Category-toggle-btn" onClick={ this.toggleInterest }>
                        { this.state.interested
                            ? "-"
                            : "+"}
                    </button>
                </div>
                <div className={`${ this.state.interested 
                    ? "Category-items "
                    : "Category-items hidden"} ${ this.state.expanded
                        ? "expand"
                        : "box"
                    }`}>
                    <ul>
                        { this.props.items.map( item => 
                            <Item 
                                key={ item.id }
                                text={ item.text }
                                notifyAdd={ () => this.sendAddItem(item.id) }
                            />
                        )}
                    </ul>
                    <div className="Category-bottom">
                        <button className="Category-expand-btn" onClick= { this.expandCategory }>
                            { this.state.expanded
                                ? <span><i class="fas fa-caret-up"></i>  See Less</span>
                                : <span><i class="fas fa-caret-down"></i>  See More</span>
                            }
                            
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
