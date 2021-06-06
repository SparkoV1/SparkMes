let dialogsData = [
    {id: 1, name: 'Dimych',},
    {id: 2, name: 'Andrey',},
    {id: 3, name: 'Sveta',},
    {id: 4, name: 'Sasha',},
    {id: 5, name: 'Viktor',},
    {id: 6, name: 'Valera',}
]

let messagesData = [
    {id: 1, message: 'Hi',},
    {id: 2, message: 'How is your it-kamasutra?',},
    {id: 3, message: 'Yo',},
    {id: 4, message: 'Yo',},
    {id: 5, message: 'Yo',},
]

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 23},
]

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;