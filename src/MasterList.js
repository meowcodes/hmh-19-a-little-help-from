import React, { Component } from 'react';
import Category from "./Category";
import AddEditForm from "./AddEditForm";
// import './MasterList.css';

/**
 * Recieves list of all categories and items
 * Renders categories as divs
 * Renders Add/Edit Form when user wants to add an item to My List
 * Sends id and edited text of added item to App
 */

class MasterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addEdit: false,
            currItem: {}
        }
        this.showAddEdit = this.showAddEdit.bind(this);
        this.hideAddEdit = this.hideAddEdit.bind(this);
    }

    showAddEdit(item) {
        // show add/edit box
        this.setState({
            addEdit: true,
            currItem: item
        });
        console.log("ITEM",item);
    }

    hideAddEdit(id, editedText) {
        // hide add/edit box
        this.setState({
            addEdit: false,
            currItem: {}
        });
        // actually add to list
        if(editedText){
            this.props.notifyAdd(id, editedText);
        }
    }

    render() {
        return (
            <div className="MasterList">
                { this.state.addEdit && 
                    <AddEditForm
                        text={ this.state.currItem.text }
                        id={ this.state.currItem.id }
                        notifyAdd={ this.hideAddEdit }
                        notifyHide={ this.hideAddEdit }
                    />
                }
                { this.props.categories.map( category =>
                    <Category 
                        key={ category.title }
                        title={ category.title }
                        items={ category.items }
                        notifyAdd={ this.showAddEdit }
                    />
                )}
            </div>
        );
    }
}

export default MasterList;
