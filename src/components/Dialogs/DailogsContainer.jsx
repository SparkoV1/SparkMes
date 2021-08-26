import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer/dialogs-reducer";
import Dialogs from "./Dailogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;