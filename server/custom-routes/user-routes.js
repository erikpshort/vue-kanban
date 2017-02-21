let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')
let Activities = require('../models/activity')
let Checklists = require('../models/checklist')


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