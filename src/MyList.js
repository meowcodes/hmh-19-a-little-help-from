import React, { Component } from 'react';
// import './MyList.css';

/**
 * Receives list from App
 * Renders My List Page
 * Allow editing and sharing with friends
 */

class MyList extends Component {
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
            <div className="MyList">
                <div className="MyList-edit">
                    <h3 className="MyList-title">My List</h3>
                    <ul className="MyList-list">
                        { this.props.list.map( item =>
                            <li className="MyList-list-item" key={ item.id }>{ item.text }</li>
                        )}
                    </ul>
                </div>
                <div className="MyList-share">
                    <h3 className="MyList-title">Share with Friends</h3>
                </div>
            </div>
        );
    }
}

export default MyList;
