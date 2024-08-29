import { Component} from "react";

class MessageList extends Component{
    constructor()
    {
        super()
        this.callbackfunction=this.callbackfunction.bind(this)
    }

    callbackfunction(data)
    {
    this.props.mycallbackfunction(data)
    }
    render()
    {

        return <div>
             <ul>
            {this.props.messagelist.map((e)=>{
            return <li>{e} <button
            
             onClick={()=>{
                this.callbackfunction(e);
             }}
            
            >Select</button></li>
        })}
        </ul>
        </div>
    }
}

export default MessageList