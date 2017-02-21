const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {

  board: {
    name: 'Board',
    endpoint: 'boards'
  },
  list: {
    name: 'List',
    endpoint: 'lists'
  },
  task: {
    name: 'Task',
    endpoint: 'tasks',
    // preventDefaultApi: true,
    // useCustomRoutes: true
  },
  comment: {
    name: 'Comment',
    endpoint: 'comments',
    // preventDefaultApi: true,
    // useCustomRoutes: true
  },
  checkList: {
    name: 'CheckList',
    endpoint: 'checkLists',
    // preventDefaultApi: true,
    // useCustomRoutes: true
  },
  activity: {
    name: 'Activity',
    endpoint: 'activities',
    // preventDefaultApi: true,
    // useCustomRoutes: true
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
}


export {
  actions,
  models
}