import Boards from '../models/board'


let router = express.Router()


router.post('/boards', function (req, res) {
    let newBoard = req.body
    Boards.create(newBoard)
        .then(board => {
            res.send({ message: "Successfully created a new board", data: board })
        })
        .catch(err => {
            res.send({ error: err })
        })
})