import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {GiftedChat} from 'react-web-gifted-chat'

const loremIpsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum';


const messages = [];
for (let i = 0; i < 20; i++) {
  messages.push(generateMessage(loremIpsum.substring(0,(Math.random() * 100000)%loremIpsum.length), i))
}


messages.push(generateMessage(`Idylla`, 3, 'https://www.wykop.pl/cdn/c3201142/comment_Sc8p2KAVLx3EyNIpXuOXngk3ZYJ0g8eq.jpg'));
messages.push(generateMessage(`Goood`, 2, 'http://img2.dmty.pl//uploads/201010/1286036107_by_julia2332_600.jpg'));

function generateMessage(text, index, image) {
  return {
    id: Math.round(Math.random() * 1000000),
    text: text,
    createdAt: new Date(),
    user: {
      id: index % 3 == 0 ? 1 : 2,
      name: 'Johniak',
    },
    image,
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
        <div style={styles.conversationList}>
        Converstions
        </div>
        <div style={styles.chat}>
          <GiftedChat user={{id: 1,}}
                      messages={this.state.messages.slice().reverse()}
                      onSend={this.onSend}/>
          </div>
        <div style={styles.converationDetails}>
        Conversation details
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    display:'flex',
    flexDirection: 'row',
    height: '100vh'
  },
  conversationList: {
    display:'flex',
    flex: 1,
  },
  chat: {
    display:'flex',
    flex: 3,
    borderWidth: '1px',
    borderColor: '#ccc',
    borderStyle: 'solid'
  },
  converationDetails: {
    display:'flex',
    flex: 1,
  }
}

export default App;
