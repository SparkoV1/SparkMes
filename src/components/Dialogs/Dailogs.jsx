import React from "react";
import "./Dialogs.scss"
import DialogItem from "./DialogItem/DailogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messagesElements = state.messagesData.map(message =>
        <MessageItem message={message.message} key={message.id} id={message.id}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className="dialogs">
            <div className="dialogsItems">
                {dialogsElements}
            </div>
            <div className="messages">
                <div>{messagesElements}</div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder="Enter your message">enter</textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;