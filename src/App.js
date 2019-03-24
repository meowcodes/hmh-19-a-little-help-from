import React, { Component } from 'react';
import Introduction from './Introduction';
import MasterList from './MasterList';
import MyListEdit from './MyListEdit';
import MyList from './MyList';
import uuid from 'uuid/v4';
import './App.css';
import logo from './h_logo.svg';

/**
 * 
 * Renders Intro Page, Master List Page, My List Page
 * 
 */

class App extends Component {
    static defaultProps = {
        pages: ["intro", "masterList", "myListEdit", "myList"]
    }

    constructor(props) {
        super(props);
        this.state = {
            currPage: "masterList",
            myList: [],
            categories: [
                {
                    title: "Indoor Exercise",
                    items: [
                        { text: "Let’s go dancing", id: uuid() },
                        { text: "Let’s take a kickboxing class", id: uuid() },
                        { text: "Let’s take a cycling class", id: uuid() },
                        { text: "Let’s do yoga", id: uuid() },
                        { text: "Let’s meditate together", id: uuid() },
                        { text: "Join me in ClassPass class", id: uuid() }
                    ]
                },
                {
                    title: "Outdoor Exercise",
                    items: [
                        { text: "Let’s go sailing", id: uuid() },
                        { text: "Let’s go surfing", id: uuid() },
                        { text: "Let’s go to the beach", id: uuid() },
                        { text: "Let’s go hiking", id: uuid() },
                        { text: "Let’s go biking", id: uuid() },
                        { text: "Let’s go to the zoo", id: uuid() },
                        { text: "Let’s take a walk in the park", id: uuid() }
                    ]
                },
                {
                    title: "Self-Care Ideas",
                    items: [
                        { text: "Go to the dentist/annual examination", id: uuid() },
                        { text: "Write gratitude journals", id: uuid() },
                        { text: "Have a bath", id: uuid() },
                        { text: "Get a haircut", id: uuid() },
                        { text: "Get my nails or eyebrows done", id: uuid() },
                        { text: "Have a facial", id: uuid() },
                        { text: "Guys: Get a hot shave", id: uuid() },
                        { text: "Keep a sleep or dream diary", id: uuid() },
                        { text: "Improve my sleep hygiene", id: uuid() },
                        { text: "Have a social- media - free day", id: uuid() },
                        { text: "Get some fresh air or walk in nature", id: uuid() }
                    ]
                },
                {
                    title: "Just for Fun",
                    items: [
                        { text: "Let’s go to a show", id: uuid() },
                        { text: "Let’s go to the museum", id: uuid() },
                        { text: "Let’s sing our hearts out", id: uuid() },
                        { text: "Let’s have a photoshoot", id: uuid() },
                        { text: "Let’s go to a concert", id: uuid() },
                        { text: "Let’s walk my dog", id: uuid() },
                        { text: "Let’s volunteer", id: uuid() }
                    ]
                },
                {
                    title: "Relaxing Activities",
                    items: [
                        { text: "Let’s hang out at my house", id: uuid() },
                        { text: "Let’s hang out at your house", id: uuid() },
                        { text: "Let’s do arts and crafts", id: uuid() },
                        { text: "Let’s play some board games", id: uuid() },
                        { text: "Let’s do a puzzle", id: uuid() },
                        { text: "Let’s play chess", id: uuid() },
                        { text: "Let’s have a wine party", id: uuid() },
                        { text: "Let’s have a cheese party", id: uuid() },
                        { text: "Let’s Marie Kondo my room", id: uuid() },
                        { text: "Let’s have a laundry party", id: uuid() },
                        { text: "Let’s go grocery shopping", id: uuid() },
                        { text: "Let’s webcam", id: uuid() },
                        { text: "Let’s write or journal", id: uuid() }
                    ]
                },
                {
                    title: "Books & Media",
                    items: [
                        { text: "Let’s read a book together", id: uuid() },
                        { text: "Let’s join a book club", id: uuid() },
                        { text: "Let’s watch a movie together", id: uuid() },
                        { text: "Let’s go to a comedy show", id: uuid() },
                        { text: "Let’s read cartoons and comedy books", id: uuid() },
                        { text: "Let’s read newspapers or journals", id: uuid() },
                        { text: "Read Mind over Moods", id: uuid() },
                        { text: "Let’s plan a themed movie marathon", id: uuid() },
                        { text: "Let’s invite friends over for a movie", id: uuid() }
                    ]
                },
                {
                    title: "Religious Activities",
                    items: [
                        { text: "Let’s go to church/temple", id: uuid() },
                        { text: "Say prayers or join a prayer group with me", id: uuid() },
                        { text: "Celebrate a religious holiday together ", id: uuid() }
                    ]
                },
                {
                    title: "Food Activities",
                    items: [
                        { text: "Let’s cook dinner together", id: uuid() },
                        { text: "Let’s bake using a family recipe", id: uuid() },
                        { text: "Let’s create a bucket list of restaurants to visit", id: uuid() },
                        { text: "Let’s go out for dinner", id: uuid() }
                    ]
                },
                {
                    title: "Others",
                    items: [
                        { text: "Let’s watch a sunrise or sunset", id: uuid() },
                        { text: "Can you check-in with me weekly", id: uuid() },
                        { text: "Keep me accountable on the weekends", id: uuid() },
                        { text: "I’d like to share my thoughts with a friend", id: uuid() }
                    ]
                },

            ]
        }
        this.addToMyList = this.addToMyList.bind(this);
        this.editMyList = this.editMyList.bind(this);
        this.removeFromMyList = this.removeFromMyList.bind(this);
    }

    addToMyList(editedText) {
        let newList = this.state.myList[0] ? this.state.myList.map(item => ({ ...item })) : [];
        newList.push({ text: editedText, id: uuid() })
        this.setState({
            myList: newList
        });
    }

    editMyList(id, editedText) {
        let newList = this.state.myList.map(item =>
            (item.id === id
                ? { id: item.id, text: editedText }
                : { ...item }
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
                    <img src={logo} alt="" className="logo" />
                        <button onClick={() => this.updatePage("intro")}>
                            Introduction
                   </button>
                        <button onClick={() => this.updatePage("masterList")}>
                            Activities
                   </button>
                        <button onClick={() => this.updatePage("myListEdit")}>
                            Edit My List
                   </button>
                        <button onClick={() => this.updatePage("myList")}>
                            Share My List
                   </button>
                </div>
                    {this.state.currPage === "intro" &&
                        <Introduction nextPage={() => this.updatePage("masterList")} />
                    }
                    {this.state.currPage === "masterList" &&
                        <MasterList
                            categories={this.state.categories}
                            notifyAdd={this.addToMyList}
                        />
                    }
                    {this.state.currPage === "myListEdit" &&
                        <MyListEdit
                            list={this.state.myList}
                            notifyEdit={this.editMyList}
                            notifyRemove={this.removeFromMyList}
                        />
                    }
                    {this.state.currPage === "myList" &&
                        <MyList list={this.state.myList} />
                    }
                </div>
                );
            }
        }
        
        export default App;
