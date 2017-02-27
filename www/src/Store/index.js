import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 3500,
    withCredentials: true

})

api.post('http://localhost:3000/login', {
    email: 'erik@erik.com',
    password: 'pw123'
})

//REGISTER ALL DATA HERE
let state = {
    showNewBoardForm: false,
    boards: [],
    activeBoard: [],
    lists: [],
    tasks: [],
    comments: [],
    activities: [],
    checklists: [],
    userBoards:[],
    collabBoards: [],
    error: {},
    
}

let handleError = (err) => {
    state.error = err
}

export default {

    //ALL DATA LIVES IN THE STATE
    state,
    //ACTIONS ARE RESPONSIBLE FOR MAKING ALL ASYNC CALLS
    actions: {
        getCollabBoards(){
            api('sharedBoards').then(res => {
                state.collabBoards = res.data.data
                console.log(res.data.data)
            }).catch(handleError)
        },
        getUserBoards() {
            api('userboards').then(res => {
                state.userBoards = res.data.data
            }).catch(handleError)
        },
        // getBoards() {
        //     api('boards').then(res => {
        //         state.boards = res.data.data
        //     }).catch(handleError)
        // },
        //COPY ALL BELOW
        getBoard(id) {
            api('boards/' + id)
                .then(res => {
                state.activeBoard = res.data.data
                })
                .catch(handleError)
        },
        createBoard(board) {
            api.post('boards', board)
                .then(res => {
                    this.getUserBoards()
                })
                .catch(handleError)
        },
        changeBoard(id, board){
            api.put('boards/' + id, board)
            .then(res => {
                this.getUserBoards()
            })
        },
        deleteBoard(id){
            api.delete('boards/' + id)
            .then(res=>{
                this.getUserBoards()
            })
        },
        //TO HERE
        // getLists() {
        //     api('lists').then(res => {
        //         state.lists = res.data.data
        //     }).catch(handleError)
        // },
        getLists(id) {
            console.log("hello-1")
            api('boards/' + id + '/lists')
                .then(res => {
                    console.log('hello')
                    state.lists = res.data.data
                })
                .catch(handleError)
        },
        createList(list) {
            api.post('lists', list)
                .then(res => {
                    this.getLists(list.boardId)
                })
                .catch(handleError)
        },
        changeList(id){
            api.put('lists/' + id, list)
            .then(res => {
                this.getLists()
            }).catch(handleError)
        },
        deleteList(id, boardId){
            api.delete('lists/' + id)
            .then(res=>{
                this.getLists(boardId)
            })
            .catch(handleError)
        },
        getTasks() {
            api('tasks').then(res => {
                state.tasks = res.data.data
            }).catch(handleError)
        },
        getTask(id) {
            api('tasks/' + id)
                .then(res => {
                })
                .catch(handleError)
        },
        createTask(id) {
            api.post('tasks/' + id, task)
                .then(res => {
                    this.getTasks()
                })
                .catch(handleError)
        },
        changeTask(id){
            api.put('tasks/' + id, task)
            .then(res => {
                this.getTasks()
            })
        },
        deleteTask(id){
            api.delete('tasks/' + id)
            .then(res=>{
                this.getTasks()
            })
            .catch(handleError)
        
    }
}
}