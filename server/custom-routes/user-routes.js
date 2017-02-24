let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')
let Activities = require('../models/activity')
let Checklists = require('../models/checklist')
let Users = require('../models/user')
let io = require('socket.io')

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
    method(req, res, next) {
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
    path: '/boards/:id/tasks',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Lists Tasks'
      console.log(req.params.id)
      Tasks.find({ boardId: req.params.id })
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
    method(req, res, next) {
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
    method(req, res, next) {
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
    method(req, res, next) {
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
    path: '/boards/:boardId/invite',
    reqType: 'put',
    method(req, res, next) {
      let action = "Invite your friends"
      Users.findOne({ email: req.body.email })
        .then(user => {
          Boards.findOne({ _id: req.params.boardId })
            .then(board => {
              board.collaborators.push(user._id)
              board.save()
              return res.send(handleResponse(action, board))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedBoards: {
    path: '/sharedBoards',
    reqType: 'get',
    method(req, res, next) {
      let action = "Get All collaboratoring boards"
      console.log(req.session.uid)
      Boards.find({ collaborators: { $in: [req.session.uid] } })
        .then(boards => {

          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getCreatorsAll: {
    path: '/creator/:creatorId/all',
    reqType: 'get',
    method(req, res, next) {
      let action = "Find All Creator's Stuff"
      let data = { boards: [], lists: [], tasks: [], comments: [], checkLists: [], activities: [] }
      Boards.find({ creatorId: req.params.creatorId })
        .then(board => {
          data.boards.push(board)
          Lists.find({ creatorId: req.params.creatorId })
            .then(list => {
              data.lists.push(list)
              Tasks.find({ creatorId: req.params.creatorId })
                .then(task => {
                  data.tasks.push(task)
                  Comments.find({ creatorId: req.params.creatorId })
                    .then(comment => {
                      data.comments.push(comment)
                      Checklists.find({ creatorId: req.params.creatorId })
                        .then(checklist => {
                          data.checkLists.push(checklist)
                          Activities.find({ creatorId: req.params.creatorId })
                            .then(activity => {
                              data.activities.push(activity)
                              return res.send(handleResponse(action, data))
                            })
                            .catch(error => {
                              return next(handleResponse(action, null, error))
                            })
                        }).catch(error => {
                          return next(handleResponse(action, null, error))
                        })
                    }).catch(error => {
                      return next(handleResponse(action, null, error))
                    })
                }).catch(error => {
                  return next(handleResponse(action, null, error))
                })
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        })
        .catch(error => {
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
