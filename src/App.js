import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import ClickImages from './ClickImages'
import Counter from './Counter'

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    groupSize: 4
  };

  lastId = 10000
  totalClicks = 0

  newId = () => {
    const id = this.lastId += 1001
    return id;
  }

  friendId = () => {
    const id = this.lastId += 100
    return id;
  }

  resetClick = () => {
    const card = this.state.friends.map( card => {
      card.clicked = false
      return card
    })
    this.setState({friends: card})
  }

  updateClickedFor = id => {
    const card = this.state.friends.map( card => {
      if (card.id === id) {
        if(card.clicked === true) {
            alert("Already clicked on this one. Score reset!")
            this.resetClick()

            this.totalClicks = 0
        }
        else {
            card.clicked = true
            this.totalClicks += 1
            if(this.totalClicks === this.state.friends.length) {
                alert("You remembered all of them! Game reset.")
                this.totalClicks = 0
            }
        }
      }
      return card
    })
    this.shuffleArray(card)
    this.setState({ friends: card })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const shuffledFriends = shuffleArray(this.state.friends);
    return (

      <Wrapper>
        <Title>Friends List</Title>
        {shuffledFriends.map(friend => (
          <FriendCard
            index = {this.newId()}
            toggleClickedState = {this.updateClickedFor}
            friends = {this.state.friends}
            clicked = {this.state.clicked}
            groupSize = {this.state.groupSize}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
