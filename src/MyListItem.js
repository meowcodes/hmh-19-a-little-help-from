import React, { Component } from 'react';
import './MyListItem.css'
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
            <li className="MyListItem">
                { this.state.edit
                    ? <div >
                        <form className="MyListItem-text" onSubmit={ this.handleSubmit }>
                            <input 
                            name="editedText" 
                            id="editedText" 
                            value={ this.state.editedText }
                            onChange={ this.handleChange }
                            />
                            <div>
                                <button>Update</button>
                            </div>
                        </form>
                    </div>
                    : <div className="MyListItem-text">
                        <p>{ this.props.item.text }</p>
                        <div>
                            <button onClick={ this.showEditForm }>Edit</button>
                            <button onClick={ () => this.props.notifyRemove(this.props.item.id) }>Remove</button>
                        </div>
                    </div>
                }

            </li>
        );
    }
}

export default MyListItem;
