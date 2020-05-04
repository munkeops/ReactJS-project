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
// class Messages extends React
class Chat extends React.Component{

    render(){
        return(
            <div className="Chat">
                <div id="ChatHeader">
                    <h3>ChatHeader</h3>
                </div>
                <div className="ChatHist">
                    <li>hey</li>
                </div>
                <MessageBuffer/>
            </div>
            
        )
    }

}

export default Chat
