import React, { Component } from 'react';
import Introduction from './Introduction';
import MasterList from './MasterList';
// import MyListEdit from './MyListEdit';
// import MyListShow from './MyListShow';
import uuid from 'uuid/v4';
import './App.css';

/**
 * 
 * Renders Intro Page, Master List Page, My List Edit Page, or My List Show Page
 * 
 */

class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            currPage: [ "intro", "masterList", "myListEdit", "myListShow"],
            myList: [],
            categories: [
                {
                    title: "Sports",
                    items: [
                        { text: "play baseball", id: uuid() },
                        { text: "go swimming", id: uuid() },
                        { text: "run in the park", id: uuid() }
                    ]
                },
                {
                    title: "Pets",
                    items: [
                        { text: "play with puppy", id: uuid() },
                        { text: "groom cat", id: uuid() }
                    ]
                }
            ]
        }
        this.addToMyList = this.addToMyList.bind(this);
    }

    addToMyList(id, editedText) {
        let newList = this.state.myList[0] ? this.state.myList.map(item => ({...item})) : [];
        newList.push({ text: editedText })
        this.setState({
            myList: newList
        });
    }

    render() {
        return (
            <div className="App">
                { this.state.currPage === "intro" &&
                    <Introduction />
                }
                { this.state.currPage === "masterList" &&
                    <MasterList 
                        categories={ this.state.categories }
                        notifyAdd={ this.addToMyList }
                    />
                }
                {/* { this.state.currPage === "myListEdit" &&
                    <MyListEdit list={ this.state.myList } />
                }
                { this.state.currPage === "myListShow" &&
                    <MyListShow list={ this.state.myList } />
                } */}
            </div>
        );
    }
}

export default App;
