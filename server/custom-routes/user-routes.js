let Boards = require('../models/board')
let Lists = require('../models/list')

export default {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Boards'
      Boards.find({ creatorId: req.session.uid })
        .then(boards => {
          res.send(handleResponse(action, boards))
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
        .then(lists => {
          res.send(handleResponse(action, lists))
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