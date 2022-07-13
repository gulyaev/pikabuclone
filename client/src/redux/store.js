const ADD_POST = 'ADD-POST'

let store = {
    _rerenderEntireTree: function () {
        console.log("state is changed");
    },

    _state: {
        postsData: [
            { id: 0, text: "Текст поста 1", likesCount: 5, disLikesCount: 3 },
            { id: 1, text: "Текст поста 2", likesCount: 4, disLikesCount: 2 },
            { id: 2, text: "Текст поста 3", likesCount: 3, disLikesCount: 1 }
        ],

        dialogsData: [
            { id: 1, name: "Анна", message: "Привет" },
            { id: 2, name: "Александра", message: "Как дела ?" },
            { id: 3, name: "Вячеслав", message: "Познакомимся" }
        ]
    },

    getState: function () {
        return this._state
    },

    dispatch: function (action) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: Date.now(),
                    text: action.payload,
                    likesCount: 53,
                    disLikesCount: 3
                };
                this._state.postsData.push(newPost);
                this._rerenderEntireTree()
                break
            default:
                return this._state
        }
    },

    subscribe: function (observer) {
        this._rerenderEntireTree = observer
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        payload: text
    }
}

window.store = store

export default store