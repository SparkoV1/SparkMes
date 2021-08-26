import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer/dialogs-reducer";
import Dialogs from "./Dailogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                            dialogPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;