const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date }
});

module.exports = mongoose.model("Project", ProjectSchema);