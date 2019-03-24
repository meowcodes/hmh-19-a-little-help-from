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
                <div className="MyList-show">
                    <div className="MyList-share">
                        <h3 className="MyList-title">Share with Friends</h3>

<p>This prototype provides an introduction we wrote plus your list: copy, paste, rewrite any way you like, and share with you who you like.</p>         
                    </div>
                    <hr/>          
                    <p className="MyList-intro">Hey friends — Sometimes I go through tough times, and could really use some help. I believe my friends want to be there, and maybe don't know what I need, so I've written down a few ways that friends could help — most of them mutual. I would really feel gratitude if you can commit to partnering with me on just one of these:</p>
                    <ul className="MyList-list">
                        { this.props.list.map( item =>
                            <li className="MyList-list-item" key={ item.id }>{ item.text }</li>
                        )}
                    </ul>
                    <p>I wrote this post with some tips from http://alittlehelpfrom.org</p>
                    <p>Check it out and consider creating your own.</p> 
                </div>
            </div>
        );
    }
}

export default MyList;
