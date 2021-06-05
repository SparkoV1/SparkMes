import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DailogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {



    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map(message => <MessageItem message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;