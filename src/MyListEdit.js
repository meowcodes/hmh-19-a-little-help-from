import React, { Component } from 'react';
import MyListItem from './MyListItem';
// import './MyListEdit.css';

/**
 * Receives list from App
 * Renders My List Page with editing features
 * Sends edited text to App
 */

class MyListEdit extends Component {
    static defaultProps = {
        list: [ 
            {text: "go swimming", id: 1},
            {text: "go to the beach", id: 2},
            {text: "hike mount diable", id: 3},
            {text: "bike around marina", id: 4}
        ]
    }
  
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="MyListEdit">
                <div className="MyListEdit-show">
                    <h3 className="MyListEdit-title">My List</h3>
                    <ul className="MyListEdit-list">
                        { this.props.list.map( item =>
                            <MyListItem 
                                key={ item.id } 
                                item={ item } 
                                notifyEdit={ this.props.notifyEdit }
                                notifyRemove={ this.props.notifyRemove }
                            />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MyListEdit;
