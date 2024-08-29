import { Component } from "react";
import MessageList from "./selectmessage";
class MessageComponent extends Component{
    constructor()
    {
        super();
        this.state={
            message:""
        }
        this.setMessage=this.setMessage.bind(this)
    }
    setMessage(data)
    {
        this.setState({message:data})
    }
    render()
    {
        return <div>
               <h3>Messages selected displayed here</h3>
            {this.state.message}
            <MessageList messagelist={["welcome message",
            "hello user",
            "regarding new connect"]}
            
            mycallbackfunction={this.setMessage}
            
            />
            
            </div>
    }
}

export default MessageComponent