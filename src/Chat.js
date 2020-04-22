import React from 'react';
import './Chat.css';

// chatmessages=[];

class MessageBuffer extends React.Component{
    
    render(){
        return(
            <div className="MessageBuffer">
                <input id="input" type="text"/>
                <button id="chatButton"><img src="https://img.icons8.com/material/24/000000/send-letter.png"/></button>
            </div>
        )
    }
}
class Chat extends React.Component{

    render(){
        return(
            <div className="Chat">
                <MessageBuffer/>
            </div>
        )
    }

}

export default Chat
