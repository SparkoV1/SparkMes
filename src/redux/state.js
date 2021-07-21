const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 23},
            ],
            newPostText: "",
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            newMessageBody: "",
        },
    },
    _callSubscribe() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) { // type
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscribe(this._state);
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = "";
            this._state.dialogPage.messagesData.push({id: 6, message: body})
            this._callSubscribe(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({  type: UPDATE_NEW_POST_TEXT, newText: text,  })

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({  type: UPDATE_NEW_MESSAGE_BODY, body: body,  })


export default store;
window.store = store
