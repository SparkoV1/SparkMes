import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DailogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = state.messagesData.map(message =>
        <MessageItem message={message.message} id={message.id}/>)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder="Enter your message">sdfsdf</textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;