import React, { Component } from 'react';

/**
 * Receives ONE item from MyListEdit
 * Renders a text or an input item (if being edited)
 * Sends edited text to App
 */

class MyListItem extends Component {
    static defaultProps = {
        item: {text: "go swimming", id: 1}
    }
  
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editedText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.notifyEdit(this.props.item.id, this.state.editedText);
        this.setState({
            edit: false,
            editedText: ""
        });
    }

    handleChange(evt) {
        this.setState({
            editedText: evt.target.value
        });
    }

    showEditForm() {
        this.setState({
            edit: true,
            editedText: this.props.item.text
        })
    }

    render() {
        return (
            <li className>
                { this.state.edit
                    ? <form onSubmit={ this.handleSubmit }>
                        <input 
                        name="editedText" 
                        id="editedText" 
                        value={ this.state.editedText }
                        onChange={ this.handleChange }
                        />
                        <button>Update</button>
                    </form>
                    : <p>
                        { this.props.item.text }
                        <button onClick={ this.showEditForm }>Edit</button>
                    </p>
                }
            </li>
        );
    }
}

export default MyListItem;
