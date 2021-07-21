import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DailogItem";
import MessageItem from "./Message/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.messagesData.map(message =>
        <MessageItem message={message.message} id={message.id}/>)

    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
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