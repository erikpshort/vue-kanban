import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	// Relations
	taskId: { type: ObjectId, ref: models.task.name, required: true },
	creatorId: { type: ObjectId, ref: models.user.name, required: true }

});

module.exports = mongoose.model(models.comment.name, schema);