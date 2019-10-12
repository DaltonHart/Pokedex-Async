 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
	name: String,
	gym: String
});

const Badge = mongoose.model('Badge', BadgeSchema);

module.exports = Badge;