import React, { Component } from 'react';
// import Introduction from './Introduction';
import MasterList from './MasterList';
import MyListEdit from './MyListEdit';
import MyList from './MyList';
import uuid from 'uuid/v4';
import './App.css';

/**
 * 
 * Renders Intro Page, Master List Page, My List Page
 * 
 */

class App extends Component {
    static defaultProps = {
        pages: [ "intro", "masterList", "myListEdit", "myList"]
    }
  
    constructor(props) {
        super(props);
        this.state = {
            currPage: "masterList",
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
        this.editMyList = this.editMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
    }

    addToMyList(editedText) {
        let newList = this.state.myList[0] ? this.state.myList.map(item => ({...item})) : [];
        newList.push({ text: editedText, id: uuid()})
        this.setState({
            myList: newList
        });
    }

    editMyList(id, editedText) {
        let newList = this.state.myList.map(item => 
            (item.id === id 
                ? { id: item.id, text: editedText }
                : {...item}
            )
        );
        this.setState({
            myList: newList
        });
    }

    removeFromMyList(id) {
        let newList = this.state.myList.filter(item => item.id !== id);
        this.setState({
            myList: newList
        });
    }

    updatePage(page) {
        this.setState({
            currPage: page
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-nav">
                    <button onClick={ () => this.updatePage("intro") }>
                        Introduction
                    </button>
                    <button onClick={ () => this.updatePage("masterList") }>
                        Activities
                    </button>
                    <button onClick={ () => this.updatePage("myListEdit") }>
                        Edit My List
                    </button>
                    <button onClick={ () => this.updatePage("myList") }>
                        Share My List
                    </button>
                </div>
                {/* { this.state.currPage === "intro" &&
                    <Introduction />
                } */}
                { this.state.currPage === "masterList" &&
                    <MasterList 
                        categories={ this.state.categories }
                        notifyAdd={ this.addToMyList }
                    />
                }
                { this.state.currPage === "myListEdit" &&
                    <MyListEdit 
                        list={ this.state.myList } 
                        notifyEdit={ this.editMyList }
                        notifyRemove={ this.removeFromMyList }
                    />
                }
                { this.state.currPage === "myList" &&
                    <MyList list={ this.state.myList } />
                }
            </div>
        );
    }
}

export default App;
