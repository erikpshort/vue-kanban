let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')
let Activities = require('../models/activity')
let Checklists = require('../models/checklist')
let Users = require('../models/user')


export default {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Boards'
      Boards.find({ creatorId: req.session.uid })
        .then(data => {
          res.send(handleResponse(action, data))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  boardLists: {
    path: '/boards/:id/lists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Board Lists'
      console.log(req.params.id)
      Lists.find({ boardId: req.params.id })
        .then(data => {
          res.send(handleResponse(action, data))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  listTasks: {
    path: '/lists/:id/tasks',
    reqType: 'get',
        method(req, res, next){
        let action = 'Find Lists Tasks'
        console.log(req.params.id)
        Tasks.find({ listId: req.params.id })
          .then(data => {
            res.send(handleResponse(action, data))
          }).catch(error => {
            return next(handleResponse(action, null, error))
          })
      }
  },
  taskComments: {
    path: '/tasks/:id/comments',
    reqType: 'get',
        method(req, res, next){
        let action = 'Find Task Comments'
        console.log(req.params.id)
        Comments.find({ taskId: req.params.id })
          .then(data => {
            res.send(handleResponse(action, data))
          }).catch(error => {
            return next(handleResponse(action, null, error))
          })
      }
  },
  taskChecklists: {
    path: '/tasks/:id/Checklists',
    reqType: 'get',
        method(req, res, next){
        let action = 'Find Task Checklists'
        console.log(req.params.id)
        Checklists.find({ taskId: req.params.id })
          .then(data => {
            res.send(handleResponse(action, data))
          }).catch(error => {
            return next(handleResponse(action, null, error))
          })
      }
  },
  taskActivities: {
    path: '/tasks/:id/Activities',
    reqType: 'get',
        method(req, res, next){
        let action = 'Find Task Activities'
        console.log(req.params.id)
        Activities.find({ taskId: req.params.id })
          .then(data => {
            res.send(handleResponse(action, data))
          }).catch(error => {
            return next(handleResponse(action, null, error))
          })
      }
  },
  inviteToBoard: {
       path: '/boards/:id/invite',
       reqType: 'put',
       method(req, res, next){
           let action = "Invite your friends"
            Users.find({email: req.body.email})
       .then(user => {
            Boards.findById(req.params.id)
            .then(board => {
                board.collaborators.push(user._id)
                board.save()
                .then(()=>{
                res.send(handleResponse(action, board))
               })
            })
       }).catch(error => {
         return next(handleResponse(action, null, error))
       })
   }
  },
sharedBoards: {
    path: '/sharedBoards',
    reqType: 'get',
    method(req, res, next){
    let action = "Get All collaboratoring boards"
      console.log(req)
      Boards.find({ collaborators: { $in: [req.headers.session] }})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}

function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}
