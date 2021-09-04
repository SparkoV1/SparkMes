import React from "react";
import "../Dialogs.scss"

const MessageItem = (props) => {
    return (
        <div className="messages">{props.message}</div>
    )
}

export default MessageItem;