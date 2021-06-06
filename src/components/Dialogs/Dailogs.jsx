import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DailogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let addMessageElement = React.createRef()

    let addMessage = () =>{
        let text = addMessageElement.current.value
        alert(text)
    }


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <MessageItem message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={addMessageElement}></textarea>
                <button onClick={addMessage}>Add post
                </button>
            </div>
        </div>
    )
}

export default Dialogs;