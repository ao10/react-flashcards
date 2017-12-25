import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, eng: "English", han: "Hanzi", pin: "Pinyin"},
        {id: 2, eng: "English_2", han: "Hanzi_2", pin: "Pinyin_2"},
        {id: 3, eng: "English_3", han: "Hanzi_3", pin: "Pinyin_3"}
      ],
      currentCard: {}
    }
  }

  //This lifecycle method gets called after constructor and before component is rendered
  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){
    
  }

  render() {
    return (
      <div className="App">
        <Card />        
      </div>
    );
  }
}

export default App;
