import React, { Component } from 'react';
import './Introduction.css';
import h1 from './h_1.svg';
import h2 from './h_2.svg';
/**
 * Receives list from App
 * Renders My List Page
 * Allow editing and sharing with friends
 */

class Introduction extends Component {
    static defaultProps = {
        list: [
            { text: "go swimming", id: 1 },
            { text: "go to the beach", id: 2 },
            { text: "hike mount diable", id: 3 },
            { text: "bike around marina", id: 4 }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Introduction">
                <section>
                <div className="container">
                    <h1 className="Introduction-title">Find Support from Your Social Network</h1>
                    <div className="Introduction-text">
                        <p>We’ve bridged the gap between mental health and socializing. Connect with your friends to find activities in your area that will bring you joy.</p>
                        <p>We simplfy and organize reaching out to your friends for help, scheduling activities. We provide concrete suggestions, usable message templates, and resources to make mental health support simple and straightforward, circumventing stigma by making it seem a normal thing to do.
                        </p>
                    </div>
                    <button onClick={ this.props.nextPage }>Connect Now</button>
                </div>
                </section>
                    <div className="Introduction-bottom">
                        <div className="Introduction-friend">
                                <img src={h1} alt="" />
                            <h3 className="Introduction-title">Here to support a loved one?</h3>
                            <p>A Little Help From support networks are invitation-based. Use the registration link in your Invite email or enter their BuddyCode below to get started.</p>
                        </div>
                        <div className="Introduction-resources">
                                <img src={h2} alt="" />
                            <h3 className="Introduction-title">Resources</h3>
                            <p>The following are some helpful resources to help you be a better mental health ally for this user.</p>
                            <ul>
                                <li><a href="https://www.latimes.com/opinion/op-ed/la-xpm-2013-apr-07-la-oe-0407-silk-ring-theory-20130407-story.html">Ring Theory</a></li>
                                <li><a href="https://www.lifeline.org.au/get-help/topics/preventing-suicide">Suicide Prevention</a></li>
                            </ul>
                        </div>
                    </div>
               </div>
        );
    }
}

export default Introduction;
