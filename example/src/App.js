import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {GiftedChat} from 'react-web-gifted-chat'


const messages = [];
for (let i = 0; i < 20; i++) {
  messages.push(generateMessage(`Test Message ${i}`, i))
}

function generateMessage(text, index) {
  return {
    _id: Math.round(Math.random() * 1000000),
    text: text,
    createdAt: new Date(),
    user: {
      _id: index % 3 == 0 ? 1 : 2,
      name: 'Johniak',
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: messages
    }
    this.onSend = this.onSend.bind(this)
  }

  renderLoading() {
    return (<div>Loading...</div>)
  }

  onSend(messages) {
    for(let message of messages){
      this.setState({messages: [...this.state.messages,message]})
    }
  }

  render() {
    console.log(this.state.messages)
    return (
      <div className="App" style={styles.container}>
        <GiftedChat user={{_id: 1,}}
                    messages={this.state.messages}
                    onSend={this.onSend}/>
      </div>
    );
  }
}
const styles = {
  container: {
    height: '100vh'
  }
}

export default App;
